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
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNotification } from "use-toast-notification";

export default function ViewProfile() {
  var sn = 1;
  const { id } = useParams();
  const [data, setData] = useState([]);
  const notification = useNotification();
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
  }, []);

  const [averageRating, setaverageRating] = useState("N/A");

  const ApiHandler3 = async () => {
    let result3 = await fetch("http://localhost:8000/api/getRating/" + userid);
    const dataa = await result3.json();
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
    ApiHandler3();
  }, []);

  const [userReviewData, setUserReviewData] = useState([]);
  const ApiHandler4 = async () => {
    let result4 = await fetch("http://localhost:8000/api/getUserReviews/" + id);
    result4 = await result4.json();
    setUserReviewData(result4.reverse());
  };
  useEffect(() => {
    ApiHandler4();
  }, []);

  const userproduct = productdata.filter((item) => item.userid == userid);

  const navigate = useNavigate();

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal2);

  const [basicModal3, setBasicModal3] = useState(false);
  const toggleShow3 = () => setBasicModal3(!basicModal3);

  const sellerid = userid;
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  function ReviewUser() {
    const userid_localstg = JSON.parse(localStorage.getItem("user-info")).user
      .id;
    const username_localstg = JSON.parse(localStorage.getItem("user-info")).user
      .name;
    const formData = new FormData();
    formData.append("userid", userid_localstg);
    formData.append("username", username_localstg);
    formData.append("sellerid", sellerid);
    formData.append("review", review);
    formData.append("rating", rating);

    fetch("http://localhost:8000/api/reviewUser", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        toggleShow3();
        ApiHandler4();
        notification.show({
          message: `User Review has been posted`,
          title: "Review Posted",
          variant: "success",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log(error);
        notification.show({
          message: `User Review has NOT been posted, try again!`,
          title: "Error",
          variant: "error",
        });
      });
    document.getElementById("reviewuser").disabled = true;
  }

  const [message, setMessage] = useState("");
  function SendChat() {
    const formData = new FormData();
    formData.append(
      "sender_id",
      JSON.parse(localStorage.getItem("user-info")).user.id
    );
    formData.append("message", message);
    fetch("http://localhost:8000/api/chat/" + sellerid + "/message", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        toggleShow();
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log(error);
      });
  }

  return (
    <>
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
                      style={{
                        width: "180px",
                        zIndex: "1",
                        maxHeight: "190px",
                      }}
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
                    {localStorage.getItem("user-info") &&
                    data.registered_as === "seller" ? (
                      <>
                        <div>
                          <MDBBtn
                            rounded
                            outline
                            color="success"
                            style={{ height: "36px", overflow: "visible" }}
                            // onClick={() => {
                            //   const id = JSON.parse(
                            //     localStorage.getItem("user-info")
                            //   ).user.id;
                            //   const chatRoom = [id, userid].join("-");
                            //   console.log(chatRoom);
                            //   navigate(`/chats/${chatRoom}`);
                            // }}
                            onClick={toggleShow}
                          >
                            <MDBIcon fas icon="envelope" className="me-2" />
                            Chat
                          </MDBBtn>
                        </div>
                        <div>
                          <MDBBtn
                            rounded
                            outline
                            color="primary"
                            style={{ height: "36px", overflow: "visible" }}
                            onClick={toggleShow3}
                            id="reviewuser"
                          >
                            <MDBIcon fas icon="edit" className="me-2" />
                            Review User
                          </MDBBtn>
                        </div>
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
            {data.registered_as === "seller" ? (
              <div className="flex-grow-1 ms-3 py-5">
                <h3 className="profiletitle2">Services listed by the seller</h3>
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
            ) : (
              <></>
            )}
            {data.registered_as === "seller" ? (
              <div>
                <h3 className="profiletitle2">Reviews for this seller</h3>
                <MDBRow className="text-center d-flex align-items-stretch">
                  {userReviewData.map((item) => {
                    return (
                      <MDBCol
                        key={item.id}
                        md="3"
                        className="align-items-stretch"
                      >
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
                                    item.rating >= 1
                                      ? "text-warning"
                                      : "text-muted"
                                  } fa fa-star `}
                                ></i>
                                <i
                                  className={`${
                                    item.rating >= 2
                                      ? "text-warning"
                                      : "text-muted"
                                  } fa fa-star `}
                                ></i>
                                <i
                                  className={`${
                                    item.rating >= 3
                                      ? "text-warning"
                                      : "text-muted"
                                  } fa fa-star `}
                                ></i>
                                <i
                                  className={`${
                                    item.rating >= 4
                                      ? "text-warning"
                                      : "text-muted"
                                  } fa fa-star `}
                                ></i>
                                <i
                                  className={`${
                                    item.rating >= 5
                                      ? "text-warning"
                                      : "text-muted"
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
              </div>
            ) : (
              <></>
            )}
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
                This user's details has been verified by the admin.
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleShow2}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        <MDBModal show={basicModal3} setShow={setBasicModal3} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  <MDBIcon icon="edit" className="me-2" color="primary" />
                  Review User
                </MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow3}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write your review here..."
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                ></textarea>
                <div className=" d-flex flex-column align-items-center ">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li style={{ cursor: "pointer" }}>
                      <br></br>
                      <i
                        className={`${
                          rating >= 1 ? "text-warning" : "text-muted"
                        } fa fa-star `}
                        onClick={() => {
                          rating >= 1 ? setRating(0) : setRating(1);
                        }}
                      ></i>
                      <i
                        className={`${
                          rating >= 2 ? "text-warning" : "text-muted"
                        } fa fa-star `}
                        onClick={() => {
                          setRating(2);
                        }}
                      ></i>
                      <i
                        className={`${
                          rating >= 3 ? "text-warning" : "text-muted"
                        } fa fa-star `}
                        onClick={() => {
                          setRating(3);
                        }}
                      ></i>
                      <i
                        className={`${
                          rating >= 4 ? "text-warning" : "text-muted"
                        } fa fa-star `}
                        onClick={() => {
                          setRating(4);
                        }}
                      ></i>
                      <i
                        className={`${
                          rating >= 5 ? "text-warning" : "text-muted"
                        } fa fa-star `}
                        onClick={() => {
                          setRating(5);
                        }}
                      ></i>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "20px",
                  }}
                >
                  <MDBBtn
                    color="success"
                    onClick={() => {
                      ReviewUser();
                    }}
                  >
                    Submit
                  </MDBBtn>
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleShow3}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  Request Chat with this freelancer?
                </MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="align-items-center">
                  <p>
                    This will send your message to the freelancer. If the
                    freelancer replies, you will be able to chat with the them
                    via the messages tab.
                  </p>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write your message here..."
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn
                  color="success"
                  onClick={() => {
                    SendChat();
                  }}
                >
                  Send Chat
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </motion.div>
    </>
  );
}
