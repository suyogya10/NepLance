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

export default function ViewRequests() {
  const [data, setData] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [deleteID, setdeleteID] = useState("");
  const [deleteflag, setDeleteflag] = useState(false);
  const [reason, setReason] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/viewCtznReq");
      const jsonData = await response.json();
      setData(jsonData.reverse());
    };
    fetchData();
  }, [deleteflag]);

  function Decline(key) {
    let formData = new FormData();
    formData.append("admin_message", reason);
    fetch("http://localhost:8000/api/declineCtzn/" + key, {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        setDeleteflag(true);
      });
    });
  }

  function Accept(key) {
    fetch("http://localhost:8000/api/verifyCtzn/" + key, {
      method: "POST",
    }).then((result) => {
      result.json().then((resp) => {
        setDeleteflag(true);
      });
    });
  }

  return (
    <>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Citizenship</th>
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
                <MDBIcon
                  style={{ cursor: "pointer" }}
                  fas
                  icon="file"
                  onClick={() => {
                    window.open("http://localhost:8000/" + item.ctznship);
                  }}
                />
              </td>
              <td>
                <MDBBtn
                  onClick={() => {
                    Accept(item.id);
                  }}
                  color="success"
                  rounded
                  size="sm"
                >
                  <MDBIcon fas icon="check" />
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
                  <MDBIcon fas icon="times-circle" />
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
                Delete Request?
              </MDBTypography>
              <MDBBtn color="none" onClick={toggleShow} type="button">
                <MDBIcon icon="times" fas />
              </MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>Reason for Decline?</p>
              <textarea
                onChange={(e) => {
                  setReason(e.target.value);
                }}
                className="form-control"
                rows="3"
              ></textarea>
              <MDBBtn color="secondary" onClick={toggleShow} type="button">
                Cancel
              </MDBBtn>
              <MDBBtn
                color="danger"
                onClick={() => {
                  Decline(deleteID);
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
