import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBIcon,
  MDBCardBody,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Errorpage from "./Errorpage";

const Jobs = () => {
  const navigate = useNavigate();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [jobs, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getRequests");
    result = await result.json();
    setData(result.reverse());
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const [acceptId, setAcceptId] = useState("");
  const [seller_bid, setSellerBid] = useState("");
  const [clientid, setClientId] = useState("");

  function AcceptPost(key) {
    let sellerid = JSON.parse(localStorage.getItem("user-info")).user.id;
    let sellername = JSON.parse(localStorage.getItem("user-info")).user.name;
    let formData = new FormData();
    formData.append("sellerid", sellerid);
    formData.append("clientid", clientid);
    formData.append("sellername", sellername);
    fetch("http://localhost:8000/api/sellerAccept/" + key + "?_method=PUT", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        toggleShow();
        navigate("/user");
      });
    });
  }

  function Bid(key) {
    let sellerid = JSON.parse(localStorage.getItem("user-info")).user.id;
    let sellername = JSON.parse(localStorage.getItem("user-info")).user.name;
    let formData = new FormData();
    formData.append("sellerid", sellerid);
    formData.append("seller_bid", seller_bid);
    formData.append("clientid", clientid);
    formData.append("sellername", sellername);
    fetch("http://localhost:8000/api/sellerBid/" + key + "?_method=PUT", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        toggleShow();
        ApiHandler();
      });
    });
  }

  return (
    <>
      {localStorage.getItem("user-info") &&
      JSON.parse(localStorage.getItem("user-info")).user.registered_as ===
        "seller" ? (
        <>
          <MDBContainer
            style={{
              marginTop: "120px",
            }}
          >
            <div
              className="colm-auto"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid",
                borderTop: "1px solid",
                borderColor: "#e5e5e5",
                paddingBottom: "30px",
                paddingTop: "30px",
                marginBottom: "30px",
              }}
            >
              <h2>User Requests </h2>
            </div>
            <MDBRow
              style={{
                display: "flex",
                width: "100%",
                alignItems: "start",
              }}
            >
              {jobs.map((job) => {
                const shortDescription =
                  job.description.length > 100
                    ? job.description.slice(0, 100) + "..."
                    : job.description;
                return (
                  <MDBCol md={4} className="mb-4" key={job.id}>
                    {job.status === "Not accepted yet" ? (
                      <>
                        <MDBCard
                          className="d-flex"
                          style={{ cursor: "pointer", maxHeight: "220px" }}
                          onClick={() => {
                            toggleShow();
                            setName(job.name);
                            setPrice(job.price);
                            setDescription(job.description);
                            setCategory(job.category);
                            setDate(job.delivery_date);
                            setAcceptId(job.id);
                            setClientId(job.userid);
                          }}
                        >
                          <MDBCardBody>
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <MDBIcon
                                  icon="briefcase"
                                  size="lg"
                                  className="text-success me-2"
                                />
                                <h5 className="mb-0">{job.name}</h5>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className="d-flex align-items-center">
                                <MDBIcon
                                  icon="clock"
                                  size="lg"
                                  className="text-success me-2"
                                />
                                <p className="mb-0">
                                  Expected Delivery: {job.delivery_date}
                                </p>
                              </div>
                            </div>
                            <p className="mb-3">{shortDescription}</p>
                            <div className="mb-3">
                              <div className="d-flex align-items-center">
                                <MDBIcon
                                  icon="hand-holding-usd"
                                  size="lg"
                                  className="text-success me-2"
                                />
                                <p className="mb-0">Rs. {job.price}</p>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </>
                    ) : (
                      <></>
                    )}
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBContainer>
        </>
      ) : (
        <>
          <Errorpage />
        </>
      )}

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Job Info</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h4>{name}</h4>
              <hr />
              <p>{description}</p>
              <hr />
              <p>Rs. {price}</p>
              <hr />
              <p>Category: {category}</p>
              <hr />
              <h5>Expected Delivery Date: </h5>
              <p>{date}</p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBInput
                label="Bid Price"
                onChange={(e) => {
                  setSellerBid(e.target.value);
                }}
              />
              <MDBBtn
                color="primary"
                onClick={() => {
                  Bid(acceptId);
                }}
              >
                Bid Price
              </MDBBtn>
              <MDBBtn
                color="success"
                onClick={() => {
                  AcceptPost(acceptId);
                }}
              >
                Accept Bid
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Jobs;
