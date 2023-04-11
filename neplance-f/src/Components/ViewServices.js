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

export default function ViewServices() {


  const navigate = useNavigate();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [deleteID, setdeleteID] = useState("");
  const [data, setData] = useState([]);
  const [deleteflag,setDeleteflag] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/getProducts");
      const jsonData = await response.json();
      setData(jsonData.reverse());
    };
    fetchData();
  }, [deleteflag]);


  function AdmindeleteProduct(id) {
    fetch(
      "http://localhost:8000/api/deleteProduct/" + id + "?_method=DELETE",
      {
        method: "DELETE",
      }
    ).then((result) => {
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
          <th scope="col">Name & Category</th>
          <th scope="col">Description & Price</th>
          <th scope="col" style={{ textAlign: "center" }}>
            Actions
          </th>
        </tr>
      </MDBTableHead>
      {data.map((item) => (
        <MDBTableBody key={item.id}>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={"http://localhost:8000/" + item.file_path}
                  alt=""
                  style={{ width: "45px", height: "45px", cursor: "pointer" }}
                  className="rounded-circle"
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                  }}
                />
                <div className="ms-3">
                  <p
                    className="fw-bold mb-1"
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </p>
                  <p className="text-muted mb-0">{item.category}</p>
                </div>
              </div>
            </td>
            <td style={{ maxWidth: "500px" }}>
              <p className="fw-normal mb-1">Rs. {item.description}</p>
              <p className="text-muted mb-0">Rs. {item.price}</p>
            </td>
            <td>
              <MDBBtn onClick={() => {
                    navigate(`/adminupdateproduct/${item.id}`);
                  }} color="primary" rounded size="sm">
                <MDBIcon fas icon="edit" />
              </MDBBtn>
              <MDBBtn
                style={{ marginLeft: "5px" }}
                color="danger"
                rounded
                size="sm"
                onClick={() => {
                  setdeleteID(item.id);
                  toggleShow();
                }}
              >
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
              AdmindeleteProduct(deleteID);
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
