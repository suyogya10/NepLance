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
import { motion } from "framer-motion";

export default function ViewUsers() {
  const [data, setData] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [deleteID, setdeleteID] = useState("");
  const [deleteflag, setDeleteflag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/getUserAll");
      const jsonData = await response.json();
      setData(jsonData.reverse());
    };
    fetchData();
  }, [deleteflag]);

  function AdminDeleteUser(key) {
    fetch("http://localhost:8000/api/deleteUser/" + key + "?_method=DELETE", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        setDeleteflag(true);
      });
    });
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Status</th>
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
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{item.name}</p>
                      <p className="text-muted mb-0">{item.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{item.designation}</p>
                  <p className="text-muted mb-0">NepLance User</p>
                </td>
                <td>
                  <MDBBadge color="success" pill>
                    Active
                  </MDBBadge>
                </td>
                <td>
                  <MDBBtn color="link" rounded size="sm">
                    Edit
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
                    AdminDeleteUser(deleteID);
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
      </motion.div>
    </>
  );
}
