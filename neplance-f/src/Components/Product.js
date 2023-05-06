import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Alert } from "react-bootstrap";
import {
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [userData, setuserData] = useState([]);
  const [reviewData, setreviewData] = useState([]);

  const ApiHandler = async () => {
    const result = await fetch(
      "http://localhost:8000/api/getSingleProduct/" + id
    );
    const resp = await result.json();
    setData(resp);
    console.log(resp);
  };

  const ApiHandler1 = async () => {
    const result1 = await fetch(
      "http://localhost:8000/api/getUser/" + data.userid
    );
    const resp1 = await result1.json();
    setuserData(resp1);
  };

  const ApiHandler3 = async () => {
    const result3 = await fetch("http://localhost:8000/api/getReviews/" + id);
    const resp3 = await result3.json();
    setreviewData(resp3.reverse());
  };

  useEffect(() => {
    ApiHandler();
  }, []);

  useEffect(() => {
    if (data) {
      ApiHandler1();
    }
  }, [data]);

  useEffect(() => {
    if ((data, userData)) {
      ApiHandler3();
    }
  }, [data, userData, reviewData]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <MDBContainer className="py-5">
            <p style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
              <MDBIcon fas icon="angle-left" /> Back
            </p>
            <MDBRow>
              <MDBCard
                style={{
                  borderRadius: "15px",
                  width: "1300px",
                  height: "700px",
                  marginTop: "20px",
                }}
              >
                <MDBRow>
                  <MDBCol>
                    <MDBCardImage
                      src={"http://localhost:8000/" + data.file_path}
                      alt="..."
                      position="top"
                      style={{
                        width: "700px",
                        height: "500px",
                        marginTop: "70px",
                        marginLeft: "20px",
                      }}
                    />
                  </MDBCol>
                  <MDBCol key={data.id}>
                    <MDBCardBody style={{ marginTop: "40px", color: "black" }}>
                      <MDBCardTitle>
                        <h1>{data.name}</h1>
                      </MDBCardTitle>
                      <MDBCardText>{data.description}</MDBCardText>
                      <MDBCardText>Price: Rs. {data.price}</MDBCardText>
                      <MDBCardText>Category: {data.category}</MDBCardText>
                      {localStorage.getItem("user-info") ? (
                        <MDBBtn
                          rounded
                          color="success"
                          style={{
                            width: "200px",
                            height: "50px",
                            marginTop: "10px",
                          }}
                          onClick={() => {
                            navigate(`/checkout/${data.id}`);
                          }}
                        >
                          <MDBIcon
                            fas
                            icon="shopping-cart"
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Order Now
                        </MDBBtn>
                      ) : (
                        <MDBBtn
                          color="success"
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          Login to Order
                        </MDBBtn>
                      )}

                      <h6 style={{ marginTop: "20px" }}>Listed By:</h6>
                      <MDBCard
                        className="d-flex"
                        style={{ borderRadius: "15px", marginTop: "5px" }}
                      >
                        <MDBCardBody className="p-4">
                          <div className="d-flex text-black">
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                style={{
                                  width: "180px",
                                  borderRadius: "10px",
                                  maxHeight: "180px",
                                }}
                                src={
                                  "http://localhost:8000/" + userData.file_path
                                }
                                alt="Profile Picture"
                                className="rounded-circle img-fluid"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <MDBCardTitle>{userData.name}</MDBCardTitle>
                              <MDBCardText>{userData.designation}</MDBCardText>

                              <div
                                className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{ backgroundColor: "#efefef" }}
                              >
                                <div>
                                  <p className="small text-muted mb-1">
                                    Rating
                                  </p>
                                  <p className="mb-0">8.5</p>
                                </div>
                              </div>
                              <div className="d-flex pt-1">
                                <MDBBtn
                                  rounded
                                  outline
                                  color="success"
                                  className="me-1 flex-grow-1"
                                  onClick={() => {
                                    navigate(`/chat/${userData.id}`);
                                  }}
                                >
                                  Chat
                                </MDBBtn>
                                <MDBBtn
                                  rounded
                                  color="success"
                                  className="flex-grow-1"
                                  onClick={() => {
                                    navigate(`/viewprofile/${userData.id}`);
                                  }}
                                >
                                  View Profile
                                </MDBBtn>
                              </div>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBRow>
          </MDBContainer>
          <MDBContainer className="py-2">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10" xl="8" className="text-center">
                <h3 className="mb-4">Reviews</h3>
                {reviewData.length == [] ? (
                  <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                    No reviews yet! Be the first one to review this service.
                  </p>
                ) : (
                  <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                    Here are some recent reviews from the customers who have
                    bought this service.
                  </p>
                )}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBRow className="text-center d-flex align-items-stretch">
              {reviewData.slice(0, 8).map((item) => {
                return (
                  <MDBCol key={item.id} md="3" className="align-items-stretch">
                    <MDBCard className="testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#9d789b" }}
                      ></div>
                      <MDBCardBody>
                        <h4 className="mb-4">{item.username}</h4>
                        <hr />
                        <p className="dark-grey-text mt-4">
                          <MDBIcon fas icon="quote-left" className="pr-2" />
                          {item.review}
                        </p>
                        <ul className="list-unstyled d-flex justify-content-between">
                          <li>
                            <i
                              className={`${
                                item.rating >= 1 ? "text-warning" : "text-muted"
                              } fa fa-star `}
                            ></i>
                            <i
                              className={`${
                                item.rating >= 2 ? "text-warning" : "text-muted"
                              } fa fa-star `}
                            ></i>
                            <i
                              className={`${
                                item.rating >= 3 ? "text-warning" : "text-muted"
                              } fa fa-star `}
                            ></i>
                            <i
                              className={`${
                                item.rating >= 4 ? "text-warning" : "text-muted"
                              } fa fa-star `}
                            ></i>
                            <i
                              className={`${
                                item.rating >= 5 ? "text-warning" : "text-muted"
                              } fa fa-star `}
                            ></i>
                          </li>
                        </ul>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBContainer>
        </div>
      </motion.div>
    </>
  );
}

export default Product;
