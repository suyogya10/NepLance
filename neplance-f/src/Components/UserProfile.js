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
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserListings from "./UserListings";
import UserOrders from "./UserOrders";
import UserRecievedOrders from "./UserRecievedOrders";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect } from "react";
import UserReviews from "./UserReviews";
import { Alert } from "react-bootstrap";

export default function UserProfile() {

  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal2);

  const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
  const [data, setData] = useState([]);


  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getUser/" + userid);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const [key, setKey] = useState("orders");
  const navigate = useNavigate();
  function AddProduct() {
    navigate("/addproduct");
  }

  function logout() {
    localStorage.clear();
    navigate("/login");
    window.location.reload(false);
  }

  function closeAlert() {
    document.getElementById("messagealert").style.display = "none";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MDBContainer className="py-2 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            {data.admin_message ? (
              <Alert
                variant={"warning"}
                closeLabel="Close alert"
                closeVariant="black"
                id="messagealert"
                dismissible
                onClose={closeAlert}
              >
                {data.admin_message}
              </Alert>
            ) : null}
            <MDBCard>
              <div className="d-flex justify-content-end text-center py-1 gap-4">
                <MDBBtn
                  onClick={logout}
                  rounded
                  color="danger"
                  style={{
                    height: "36px",
                    overflow: "visible",
                    marginRight: "2px",
                  }}
                >
                  <MDBIcon fas icon="sign-out-alt" className="me-2" />
                  Logout
                </MDBBtn>
              </div>
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
                    style={{ width: "180px", zIndex: "1", maxHeight: "190px", height: "190px" }}
                  />
                  <MDBBtn
                    onClick={() => {
                      navigate(`/updateuser/${userid}`);
                    }}
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Edit profile
                  </MDBBtn>
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
                  <div>
                    {data.registered_as === "seller" && data.requested === "no" ? (
                      <MDBBtn
                        onClick={AddProduct}
                        rounded
                        outline
                        color="success"
                        style={{ height: "36px", overflow: "visible" }}
                      >
                        <MDBIcon fas icon="plus" className="me-2" />
                        Add Service
                      </MDBBtn>
                    ) : (
                      <MDBBtn
                        rounded
                        outline
                        color="success"
                        style={{ height: "36px", overflow: "visible" }}
                        onClick={() => {
                          navigate("/becomeseller");
                        }
                        }
                      >
                        <MDBIcon fas icon="plus" className="me-2" />
                        Become a Seller
                      </MDBBtn>
                    )}
                  </div>

                  {data.registered_as === "seller" ? (
                    <>
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
        </MDBRow>
      </MDBContainer>

      <MDBContainer style={{ marginTop: "5px" }}>
        <MDBRow className="justify-content-left">
          <MDBCol>
            {data.registered_as === "seller" ? (
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="orders" title="Ordered Services">
                  <UserOrders />
                </Tab>
                <Tab eventKey="listings" title="Your Services">
                  <UserListings />
                </Tab>
                <Tab eventKey="recieved" title="Recieved Orders">
                  <UserRecievedOrders />
                </Tab>
                <Tab eventKey="reviews" title="Your Reviews">
                  <UserReviews />
                </Tab>
              </Tabs>
            ) : (
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="orders" title="Ordered Services">
                  <UserOrders />
                </Tab>
                <Tab eventKey="reviews" title="Your Reviews">
                  <UserReviews />
                </Tab>
              </Tabs>
            )}
          </MDBCol>
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
              This user's details have been verified by the admin.
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
