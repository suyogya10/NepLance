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

function UserReviews() {

  const navigate = useNavigate();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [deleteID, setdeleteID] = useState("");

  const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
  var sn = 1;

  const [reviewData, setreviewData] = useState([]);

  const ApiHandler = async () => {
    const result = await fetch(
      "http://localhost:8000/api/getReviewByUser/" + userid
    );
    const resp = await result.json();
    setreviewData(resp.reverse());
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  function DeleteReview(key) {
    fetch("http://localhost:8000/api/deleteReview/" + key + "?_method=DELETE", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        ApiHandler();
      });   
    });
  }
  return (
    <div className="flex-grow-1 ms-3">
      <h3 className="profiletitle2">Posted Reviews</h3>
      <MDBTable hover style={{ textAlign: "center" }}>
        <MDBTableHead>
          <tr>
            <th scope="col" className="fw-bold">
              S.N
            </th>
            <th scope="col" className="fw-bold">
              View Review on Service
            </th>
            <th scope="col" className="fw-bold">
              Your Review
            </th>
            <th scope="col" className="fw-bold">
              Delete
            </th>
          </tr>
        </MDBTableHead>
        {reviewData.map((item) => (
          <MDBTableBody key={reviewData.review_id}>
            <tr>
              <td>
                <MDBBadge color="secondary" pill>
                  {sn++}
                </MDBBadge>
              </td>
              <td>
                <MDBBtn
                  size="sm"
                  rounded
                  color="success"
                  onClick={() => {
                    navigate(`/product/${item.productid}`);
                  }}
                >
                  <MDBIcon fas icon="eye" />
                </MDBBtn>
              </td>
              <td>
                <p className="fw-normal mb-2">{item.review}</p>
              </td>
              <td>
                <MDBBtn size="sm" rounded color="danger" onClick={() => {
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
                  DeleteReview(deleteID);
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
    </div>
  );
}

export default UserReviews;
