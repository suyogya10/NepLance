import React from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewReviews() {

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [deleteID, setdeleteID] = useState("");
  const [deleteflag,setDeleteflag] = useState(false)

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/getReviewsAll");
      const jsonData = await response.json();
      setData(jsonData.reverse());
    };
    fetchData();
  }, [deleteflag]);

  function AdminDeleteReview(key) {
    fetch("http://localhost:8000/api/deleteReview/" + key + "?_method=DELETE", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        setDeleteflag(true)
      });   
    });
  }

  return (
    <>
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">From User</th>
          <th scope="col">Review</th>
          <th scope="col">Service id</th>

          <th scope="col" style={{ textAlign: "center" }}>
            Actions
          </th>
        </tr>
      </MDBTableHead>
      {data.map((item) => (
        <MDBTableBody key={item.review_id}>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="fw-bold mb-1">{item.username}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">{item.review}</p>
            </td>
            <td
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => {
                navigate(`/product/${item.productid}`);
              }}
            >
              {item.productid}
            </td>
            <td>
              <MDBBtn color="danger" rounded size="sm" onClick={() => {
                    setdeleteID(item.review_id);
                    toggleShow();
                }}>
                <MDBIcon fas icon="trash" />
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      ))}
    </MDBTable>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
    <MDBModalDialog>
      <MDBModalContent style={{ textAlign: "center" }}>
        <MDBModalHeader>
          <MDBTypography tag="h5" variant="h5">
            Delete Review
          </MDBTypography>
          <MDBBtn color="none" onClick={toggleShow} type="button">
            <MDBIcon icon="times" fas />
          </MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
          <p>Are you sure you want to delete this review?</p>
          <MDBBtn color="secondary" onClick={toggleShow} type="button">
            Cancel
          </MDBBtn>
          <MDBBtn
            color="danger"
            onClick={() => {
              AdminDeleteReview(deleteID);
                toggleShow();
            }}
            style={{ marginLeft: "10px" }}
            type="button"
          >
            Delete
          </MDBBtn>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
  </>
  );
}
