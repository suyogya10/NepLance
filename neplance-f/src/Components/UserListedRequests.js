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
  MDBInput,
  MDBModalFooter,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KhaltiCheckout from "khalti-checkout-web";

function UserListedRequests() {
  const navigate = useNavigate();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal2);

  const [deleteID, setdeleteID] = useState("");

  const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
  var sn = 1;

  const [postData, setpostData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [postStatus, setPostStatus] = useState("");
  const [bid, setBid] = useState("");
  const [sellerid, setSellerid] = useState("");
  const [token, setToken] = useState("");
  const [comments_seller, setComments_seller] = useState("");
  const [file_seller, setFile_seller] = useState("");

  const ApiHandler = async () => {
    const result = await fetch(
      "http://localhost:8000/api/getRequestByUser/" + userid
    );
    const resp = await result.json();
    setpostData(resp.reverse());
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  function DeleteReview(key) {
    fetch(
      "http://localhost:8000/api/deleteRequest/" + key + "?_method=DELETE",
      {
        method: "DELETE",
      }
    ).then((result) => {
      result.json().then((resp) => {
        ApiHandler();
      });
    });
  }

  const [acceptId, setAcceptId] = useState("");
  const [rejectID, setRejectID] = useState("");

  function UserAccept(key) {
    let formData = new FormData();
    formData.append("price", bid);
    fetch("http://localhost:8000/api/userAccept/" + key + "?_method=PUT", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        toggleShow2();
        ApiHandler();
      });
    });
  }

  function UserReject(key) {
    fetch("http://localhost:8000/api/userReject/" + key + "?_method=PUT", {
      method: "POST",
    }).then((result) => {
      result.json().then((resp) => {
        toggleShow2();
        ApiHandler();
      });
    });
  }

  let config = {
    // replace this key with yours
    publicKey: "test_public_key_71749511005c44e6b247ce9662b5e0c3",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        // const seller_id = product.userid;
        // const client_id = JSON.parse(localStorage.getItem("user-info")).user.id;
        let formData = new FormData();
        // formData.append("seller_id", seller_id);
        // formData.append("product_id", product.id);
        // formData.append("quantity", 1);
        // formData.append("price", product.price);
        // formData.append("comments", clientMessage);
        // formData.append("product_name", product.name);
        // formData.append("payment_id", payload.paymentID);
        formData.append("payment_token", payload.token);
        // formData.append("status", "success");
        // formData.append("file_client", file_client);
        console.log(formData);
        console.log(acceptId);
        console.log(payload.token);
        fetch(
          "http://localhost:8000/api/Payment/" + acceptId + "?_method=PUT",
          {
            method: "POST",
            body: formData,
          }
        ).then((result) => {
          result.json().then((resp) => {
            console.warn(resp);
          });
        });
        alert("Payment Successful");
        toggleShow2();
        ApiHandler();
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
        alert("Payment Failed");
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };
  let checkout = new KhaltiCheckout(config);
  function pay() {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 10000 });
  }
  return (
    <div className="flex-grow-1 ms-3">
      <h3 className="profiletitle2">Posted Requests</h3>
      <MDBTable hover style={{ textAlign: "center" }}>
        <MDBTableHead>
          <tr>
            <th scope="col" className="fw-bold">
              S.N
            </th>
            <th scope="col" className="fw-bold">
              Job Title
            </th>
            <th scope="col" className="fw-bold">
              Price
            </th>
            <th scope="col" className="fw-bold">
              Actions
            </th>
          </tr>
        </MDBTableHead>
        {postData.map((item) => (
          <MDBTableBody key={postData.id}>
            <tr>
              <td>
                <MDBBadge color="secondary" pill>
                  {sn++}
                </MDBBadge>
              </td>
              <td>
                <p className="fw-normal mb-2">{item.name}</p>
              </td>
              <td>
                <p className="fw-normal mb-2">Rs. {item.price}</p>
              </td>
              <td>
                <MDBBtn
                  size="sm"
                  rounded
                  color="success"
                  onClick={() => {
                    toggleShow2();
                    setName(item.name);
                    setPrice(item.price);
                    setDescription(item.description);
                    setCategory(item.category);
                    setDate(item.delivery_date);
                    setPostStatus(item.status);
                    setBid(item.seller_bid);
                    setSellerid(item.sellerid);
                    setAcceptId(item.id);
                    setRejectID(item.id);
                    setToken(item.payment_token);
                    setComments_seller(item.comments_seller);
                    setFile_seller(item.file_seller);
                  }}
                >
                  <MDBIcon fas icon="info" />
                </MDBBtn>
                {item.status == "Not accepted yet" ? (
                  <MDBBtn
                    size="sm"
                    rounded
                    color="danger"
                    onClick={() => {
                      setdeleteID(item.id);
                      toggleShow();
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    <MDBIcon fas icon="trash" />
                  </MDBBtn>
                ) : (
                  <></>
                )}
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
                Delete Request
              </MDBTypography>
              <MDBBtn color="light" onClick={toggleShow} type="button">
                <MDBIcon icon="times" fas />
              </MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>Are you sure you want to delete this request?</p>
              <MDBBtn color="secondary" onClick={toggleShow} type="button">
                Cancel
              </MDBBtn>
              <MDBBtn
                color="danger"
                onClick={() => {
                  DeleteReview(deleteID);
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
      <MDBModal show={basicModal2} setShow={setBasicModal2} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Job Info</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow2}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h4>
                {" "}
                <MDBIcon
                  icon="briefcase"
                  size="lg"
                  className="text-success me-2"
                />
                {name}
              </h4>
              <hr />
              <p>{description}</p>
              <hr />
              <p>
                <MDBIcon
                  icon="hand-holding-usd"
                  size="lg"
                  className="text-success me-2"
                />{" "}
                Rs. {price}
              </p>
              <hr />
              <p>Category: {category}</p>
              <hr />
              <p>
                <MDBIcon icon="clock" size="lg" className="text-success me-2" />
                Expected Delivery Date: {date}
              </p>
              <hr />
              {postStatus === "Accepted" ? (
                <>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Post Status</p>
                    <p
                      className="fw-bold"
                      style={{ color: "#00BF63", cursor: "pointer" }}
                      onClick={() => {
                        navigate("/viewprofile/" + sellerid);
                      }}
                    >
                      {postStatus} by Seller ID: {sellerid}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Post Status</p>
                    <p className="fw-bold" style={{ color: "#00BF63" }}>
                      Pending
                    </p>
                  </div>
                </>
              )}

              {bid != null ? (
                <>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Seller Bid</p>
                    <p
                      className="fw-bold"
                      style={{ color: "#00BF63", cursor: "pointer" }}
                      onClick={() => {
                        navigate("/viewprofile/" + sellerid);
                      }}
                    >
                      Rs. {bid} by Seller ID: {sellerid}
                    </p>
                  </div>
                  <div className="d-flex gap-2 ms-auto  justify-content-end">
                    <p className="fw-bold"></p>
                    <MDBBtn
                      rounded
                      color="success"
                      size="sm"
                      type="button"
                      onClick={() => {
                        UserAccept(acceptId);
                      }}
                    >
                      Accept Bid
                    </MDBBtn>
                    <MDBBtn
                      rounded
                      color="danger"
                      size="sm"
                      type="button"
                      onClick={() => {
                        UserReject(rejectID);
                      }}
                    >
                      Reject Bid
                    </MDBBtn>
                  </div>
                </>
              ) : (
                <></>
              )}
              {token === null ? (
                <>
                  <div className="d-flex gap-2 ms-auto  justify-content-end">
                    <p className="fw-bold"></p>
                    {postStatus === "Accepted" ? (
                      <>
                        <MDBBtn
                          rounded
                          style={{ backgroundColor: "#5C2D91" }}
                          size="sm"
                          type="button"
                          id="payment-button"
                          onClick={pay}
                        >
                          Pay With Khalti
                        </MDBBtn>
                        <MDBBtn rounded color="success" size="sm" type="button">
                          Chat With Seller
                        </MDBBtn>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Payment Status</p>
                    <p className="fw-bold" style={{ color: "#00BF63" }}>
                      <MDBIcon
                        size="lg"
                        far
                        icon="check-circle"
                        className="text-success"
                        style={{ marginRight: "5px" }}
                      />
                      Paid
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Comments from Freelancer:</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>{comments_seller}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">File attached by Freelancer</p>
                    {file_seller ? (
                      <MDBBtn
                        rounded
                        color="success"
                        size="sm"
                        style={{ maxHeight: "30px" }}
                        onClick={() => {
                          window.open("http://localhost:8000/" + file_seller);
                        }}
                      >
                        <MDBIcon fas icon="download me-2" /> Download
                      </MDBBtn>
                    ) : (
                      <p className="fw-bold">No files attached</p>
                    )}
                  </div>
                </>
              )}
            </MDBModalBody>
            <MDBModalFooter></MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default UserListedRequests;
