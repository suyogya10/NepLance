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
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserListings from "./UserListings";
import UserOrders from "./UserOrders";
import UserRecievedOrders from "./UserRecievedOrders";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect } from "react";
import UserReviews from "./ReviewedServices";
import ReviewedUsers from "./ReviewedUsers";
import { Alert } from "react-bootstrap";
import UserListedRequests from "./UserListedRequests";
import SellerAcceptedRequests from "./SellerAcceptedRequests";

export default function UserProfile() {
  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal2);

  const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
  const [data, setData] = useState([]);
  const [averageRating, setaverageRating] = useState("N/A");

  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getUser/" + userid);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const ApiHandler2 = async () => {
    let result2 = await fetch("http://localhost:8000/api/getRating/" + userid);
    const dataa = await result2.json();
    setaverageRating(
      parseFloat(
        dataa.rating >= 3.5 ? Math.ceil(dataa.rating) : Math.floor(dataa.rating)
      )
    );
    if (dataa.rating == null) {
      setaverageRating("N/A");
    }
  };

  useEffect(() => {
    ApiHandler2();
  }, []);

  const [key, setKey] = useState("orders");
  const [key2, setKey2] = useState("services");
  const navigate = useNavigate();
  function AddProduct() {
    navigate("/addproduct");
  }

  function closeAlert() {
    document.getElementById("messagealert").style.display = "none";
  }

  return (
    <>
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
                      style={{
                        width: "180px",
                        zIndex: "1",
                        maxHeight: "190px",
                        height: "190px",
                      }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h3">
                      {data.name}{" "}
                      {data.registered_as === "seller" ? (
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
                      {data.registered_as === "seller" &&
                      data.requested === "no" ? (
                        <>
                          <MDBBtn
                            onClick={() => {
                              navigate(`/updateuser/${userid}`);
                            }}
                            outline
                            rounded
                            color="primary"
                            style={{ height: "36px", overflow: "visible" }}
                          >
                            Edit profile
                          </MDBBtn>
                          <MDBBtn
                            onClick={AddProduct}
                            rounded
                            outline
                            color="success"
                            style={{
                              height: "36px",
                              overflow: "visible",
                              marginLeft: "10px",
                            }}
                          >
                            <MDBIcon fas icon="plus" className="me-2" />
                            Add Service
                          </MDBBtn>
                        </>
                      ) : (
                        <>
                          <MDBBtn
                            onClick={() => {
                              navigate(`/updateuser/${userid}`);
                            }}
                            outline
                            rounded
                            size="sm"
                            color="primary"
                            style={{ height: "36px", overflow: "visible" }}
                          >
                            Edit profile
                          </MDBBtn>
                          <MDBBtn
                            onClick={() => {
                              navigate("/userinterest");
                            }}
                            outline
                            rounded
                            size="sm"
                            color="dark"
                            style={{
                              height: "36px",
                              overflow: "visible",
                              marginLeft: "10px",
                            }}
                          >
                            Choose Interests
                          </MDBBtn>
                          <MDBBtn
                            rounded
                            size="sm"
                            color="success"
                            style={{
                              height: "36px",
                              overflow: "visible",
                              marginLeft: "10px",
                            }}
                            onClick={() => {
                              navigate("/becomeseller");
                            }}
                          >
                            <MDBIcon fas icon="plus" className="me-2" />
                            Become a Seller
                          </MDBBtn>
                        </>
                      )}
                    </div>

                    {data.registered_as === "seller" ? (
                      <>
                        <div>
                          <ul className="list-unstyled d-flex justify-content-between">
                            <li>
                              <i
                                className={`${
                                  averageRating >= 1
                                    ? "text-warning"
                                    : "text-muted"
                                } fa fa-star `}
                              ></i>
                              <i
                                className={`${
                                  averageRating >= 2
                                    ? "text-warning"
                                    : "text-muted"
                                } fa fa-star `}
                              ></i>
                              <i
                                className={`${
                                  averageRating >= 3
                                    ? "text-warning"
                                    : "text-muted"
                                } fa fa-star `}
                              ></i>
                              <i
                                className={`${
                                  averageRating >= 4
                                    ? "text-warning"
                                    : "text-muted"
                                } fa fa-star `}
                              ></i>
                              <i
                                className={`${
                                  averageRating >= 5
                                    ? "text-warning"
                                    : "text-muted"
                                } fa fa-star `}
                              ></i>
                            </li>
                          </ul>
                          <MDBCardText className="small text-muted mb-0">
                            User Rating
                          </MDBCardText>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-2">
                    <p className="lead fw-normal mb-1">Description</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <MDBCardText className="font-italic mb-1">
                        {data.bio}
                      </MDBCardText>
                    </div>
                  </div>
                  {data.registered_as === "seller" ? (
                    <>
                      <div className="mb-2">
                        <p className="lead fw-normal mb-1">Contact Options</p>
                        <div
                          className="p-4"
                          style={{ backgroundColor: "#f8f9fa" }}
                        >
                          <MDBCardText className="font-italic mb-1">
                            Mobile Number: {data.number}{" "}
                            <MDBIcon color="primary" icon="check-circle" />
                            <br></br>
                            Contact Email: {data.contact_email}
                          </MDBCardText>
                        </div>
                      </div>
                    </>
                  ) : null}
                </MDBCardBody>
              </MDBCard>
              {data.registered_as === "seller" ? (
                <>
                  <div
                    className="row d-flex gap-2 mt-2"
                    style={{ marginLeft: "40px" }}
                  >
                    <MDBCard style={{ width: "300px" }}>
                      <MDBCardBody>
                        <MDBCardTitle>Education</MDBCardTitle>
                        <MDBCardText>
                          {data.degree} Graduated : {data.graduation_date}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ width: "300px" }}>
                      <MDBCardBody>
                        <MDBCardTitle>Occupation Field</MDBCardTitle>
                        <MDBCardText>{data.occupation}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ width: "300px" }}>
                      <MDBCardBody>
                        <MDBCardTitle>In Occupation Since</MDBCardTitle>
                        <MDBCardText>{data.occupation_since}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ width: "300px" }}>
                      <MDBCardBody>
                        <MDBCardTitle>CV</MDBCardTitle>
                        <MDBCardText>
                          <MDBBtn
                            href={"http://localhost:8000/" + data.cv}
                            target="_blank"
                            outline
                            color="success"
                            style={{ height: "36px", overflow: "visible" }}
                          >
                            <MDBIcon
                              fas
                              icon="file-download"
                              className="me-2"
                            />
                            View CV
                          </MDBBtn>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </>
              ) : null}
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer style={{ marginTop: "5px" }}>
          <MDBRow className="justify-content-left">
            <MDBCol>
              {data.registered_as === "seller" ? (
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key2}
                  onSelect={(k) => setKey2(k)}
                  className="mb-3"
                >
                  <Tab eventKey="services" title="Your Services">
                    <UserListings />
                  </Tab>
                  <Tab eventKey="orders" title="Your Orders">
                    <UserOrders />
                  </Tab>
                  <Tab eventKey="recieved" title="Recieved Orders">
                    <UserRecievedOrders />
                  </Tab>
                  <Tab eventKey="recievedrequests" title="Client Requests">
                    <SellerAcceptedRequests />
                  </Tab>
                  <Tab eventKey="requests" title="Your Requests">
                    <UserListedRequests />
                  </Tab>
                  <Tab eventKey="reviews" title="Posted Service Reviews">
                    <UserReviews />
                  </Tab>
                  <Tab eventKey="user-reviews" title="Posted User Reviews">
                    <ReviewedUsers />
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
                  <Tab eventKey="requests" title="Posted Requests">
                    <UserListedRequests />
                  </Tab>
                  <Tab eventKey="reviews" title="Posted Service Reviews">
                    <UserReviews />
                  </Tab>
                  <Tab eventKey="user-reviews" title="Posted User Reviews">
                    <ReviewedUsers />
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
                  <MDBIcon
                    icon="check-circle"
                    className="me-2"
                    color="success"
                  />
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
    </>
  );
}
