import React from "react";
import { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardText,
  MDBTypography,
  MDBCardImage,
  MDBBtn,
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ViewProfile() {
  var sn = 1;
  const { id } = useParams();
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getUser/" + id);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const userid = id;
  const [productdata, setProductData] = useState([]);
  const ApiHandler2 = async () => {
    let result2 = await fetch("http://localhost:8000/api/getProducts");
    result2 = await result2.json();
    setProductData(result2.reverse());
  };
  useEffect(() => {
    ApiHandler2();
  }, [data]);

  const userproduct = productdata.filter((item) => item.userid == userid);

  const navigate = useNavigate();
  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MDBContainer className="py-5 h-100">
        <p style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          <MDBIcon fas icon="angle-left" /> Back
        </p>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#00BF63", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "180px", maxHeight: "180px" }}
                >
                  <MDBCardImage
                    src={"http://localhost:8000/" + data.file_path}
                    alt="Profile Picture"
                    className="mt-4 mb-2 img-thumbnail rounded-circle img-fluid"
                    style={{ width: "180px", zIndex: "1", maxHeight: "190px" }}
                  />
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h3">
                    {data.name}{" "}
                    {data.ctzn_verified === "yes" ? (
                      <MDBIcon
                        color="light"
                        icon="check-circle"
                        onClick={toggleShow2}
                        style={{ cursor: "pointer" }}
                      />
                    ) : null}{" "}
                  </MDBTypography>
                  <MDBTypography tag="h5">{data.designation}</MDBTypography>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1 gap-4">
                  {data.registered_as === "seller" ? (
                    <>
                      <div>
                        <MDBBtn
                          rounded
                          outline
                          color="success"
                          style={{ height: "36px", overflow: "visible" }}
                        >
                          <MDBIcon fas icon="envelope" className="me-2" />
                          Chat
                        </MDBBtn>
                      </div>

                      <div>
                        <MDBCardText className="mb-1 h5">3</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">
                          Servies
                        </MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">4.5</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">
                          Rating
                        </MDBCardText>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      {data.bio}
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <div className="flex-grow-1 ms-3 py-5">
            <h3 className="profiletitle2">Services Listed by the User</h3>
            <MDBTable hover>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="fw-bold">
                    S.N
                  </th>
                  <th scope="col" className="fw-bold">
                    Title
                  </th>
                  <th scope="col" className="fw-bold">
                    Description
                  </th>
                  <th scope="col" className="fw-bold">
                    Price
                  </th>
                </tr>
              </MDBTableHead>
              {userproduct.map((item) => (
                <MDBTableBody>
                  <tr
                    onClick={() => {
                      navigate("/product/" + item.id);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <th scope="row">{sn++}</th>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                  </tr>
                </MDBTableBody>
              ))}
            </MDBTable>
          </div>
        </MDBRow>
      </MDBContainer>
      <MDBModal show={basicModal2} setShow={setBasicModal2} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <MDBIcon icon="check-circle" className="me-2" color="success" />
                Verified User
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow2}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              This user's citizenship has been verified by the admin.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow2}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </motion.div>
  );
}
