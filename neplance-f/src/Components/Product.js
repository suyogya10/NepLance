import React from "react";
import { Form, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

export function Product() {
  const [review, setReview] = useState("");
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
    setreviewData(resp3);
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
  }, [data, userData]);

  function addReview() {
    const userid_localstg = JSON.parse(localStorage.getItem("user-info")).user
      .id;
    const username = JSON.parse(localStorage.getItem("user-info")).user.name;
    let formData = new FormData();
    formData.append("userid_localstg", userid_localstg);
    formData.append("id", id);
    formData.append("username", username);
    formData.append("review", review);
    fetch("http://localhost:8000/api/reviewProduct", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    document.getElementById("addreview").value = "";
    alert("Review Added Successfully");
    window.location.reload(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCard
              style={{
                borderRadius: "15px",
                width: "1300px",
                height: "640px",
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
                <MDBCol>
                  <MDBCardBody style={{ marginTop: "40px", color: "black" }}>
                    <MDBCardTitle>
                      <h1>{data.name}</h1>
                    </MDBCardTitle>
                    <MDBCardText>{data.description}</MDBCardText>
                    <MDBCardText>Price: Rs. {data.price}</MDBCardText>
                    <MDBCardText>Category: {data.category}</MDBCardText>

                    <MDBBtn
                      rounded
                      color="success"
                      style={{
                        width: "200px",
                        height: "50px",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        alert("Added to Cart");
                      }}
                    >
                      <MDBIcon fas icon="shopping-cart" /> Add to Cart
                    </MDBBtn>
                    <h6 style={{ marginTop: "20px" }}>Listed By:</h6>
                    <MDBCard style={{ borderRadius: "15px", marginTop: "5px" }}>
                      <MDBCardBody className="p-4">
                        <div className="d-flex text-black">
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              style={{ width: "180px", borderRadius: "10px" }}
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                              alt="Generic placeholder image"
                              fluid
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <MDBCardTitle>{userData.name}</MDBCardTitle>
                            <MDBCardText>{userData.designation}</MDBCardText>

                            <div
                              className="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <div className="px-3">
                                <p className="small text-muted mb-1">
                                  Followers
                                </p>
                                <p className="mb-0">976</p>
                              </div>
                              <div>
                                <p className="small text-muted mb-1">Rating</p>
                                <p className="mb-0">8.5</p>
                              </div>
                            </div>
                            <div className="d-flex pt-1">
                              <MDBBtn
                                rounded
                                outline
                                color="success"
                                className="me-1 flex-grow-1"
                              >
                                Email
                              </MDBBtn>
                              <MDBBtn
                                rounded
                                color="success"
                                className="flex-grow-1"
                              >
                                Follow
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
        <MDBContainer className="py-5">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="10" xl="8" className="text-center">
              <h3 className="mb-4">Reviews</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Here are some recent reviews from the customers who have bought
                this product.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow className="text-center d-flex align-items-stretch">
            {reviewData.reverse().slice(0, 4).map((item) => (
              <MDBCol
                md="3"
                className="align-items-stretch"
              >
                <MDBCard className="testimonial-card">
                  <div
                    className="card-up"
                    style={{ backgroundColor: "#9d789b" }}
                  ></div>
                  <div className="avatar mx-auto bg-white">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <MDBCardBody>
                    <h4 className="mb-4">{item.username}</h4>
                    <hr />
                    <p className="dark-grey-text mt-4">
                      <MDBIcon fas icon="quote-left" className="pr-2" />
                      {item.review}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>

        {localStorage.getItem("user-info") ? (
          <>
            <MDBContainer className="py-5">
              <MDBCard>
                <MDBCardBody>
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="10" xl="8" className="text-center">
                      <h3 className="mb-4">Add a Review</h3>
                      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                        Please add a review if you have bought this product.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <div class="mb-3">
                    <textarea
                      type="textarea"
                      class="form-control"
                      id="addreview"
                      placeholder="Product Review"
                      onChange={(e) => {
                        setReview(e.target.value);
                      }}
                    />
                  </div>
                  <MDBBtn
                    rounded
                    color="success"
                    onClick={addReview}
                    style={{
                      width: "100px",
                      height: "35px",
                      marginTop: "20px",
                    }}
                  >
                    Submit
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </>
        ) : (
          <></>
        )}
      </div>
    </motion.div>
  );
}

export default Product;
