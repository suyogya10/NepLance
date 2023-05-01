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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserOrders() {
  const username = JSON.parse(localStorage.getItem("user-info")).user.name;
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const client_id = JSON.parse(localStorage.getItem("user-info")).user.id;
  var sn = 1;
  const navigate = useNavigate();
  const [orderdata, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch(
      "http://localhost:8000/api/getOrders/" + client_id
    );
    result = await result.json();
    setData(result.reverse());
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const [product_name, setproduct_name] = useState("");
  const [product_price, setproduct_price] = useState("");
  const [product_status, setproduct_status] = useState("");
  const [file_seller, setfile_seller] = useState("");
  const [comments_seller, setcomments_seller] = useState("");
  const [seller_id, setseller_id] = useState("");
  const [order_id, setorder_id] = useState("");
  const [isRating, setisRating] = useState(false);
  const [rating, setRating] = useState("");
  const [productid, setproductid] = useState("");
  const [review, setReview] = useState("");

  function addReview() {
    const userid_localstg = JSON.parse(localStorage.getItem("user-info")).user
      .id;
    const username = JSON.parse(localStorage.getItem("user-info")).user.name;
    let formData = new FormData();
    formData.append("userid_localstg", userid_localstg);
    formData.append("id", productid);
    formData.append("username", username);
    formData.append("review", review);
    formData.append("rating", rating);
    fetch("http://localhost:8000/api/reviewProduct", {
      method: "POST",
      body: formData,
    })
      .then((result) => {
        result.json().then((resp) => {});
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="flex-grow-1 ms-3">
      <h3 className="profiletitle2">Ordered Services</h3>
      <MDBTable hover style={{ textAlign: "center" }}>
        <MDBTableHead>
          <tr>
            <th scope="col" className="fw-bold">
              S.N
            </th>
            <th scope="col" className="fw-bold">
              Service Name
            </th>
            <th scope="col" className="fw-bold">
              Your Comments
            </th>
            <th scope="col" className="fw-bold">
              Payment Info
            </th>
          </tr>
        </MDBTableHead>
        {orderdata.map((item) => (
          <MDBTableBody key={item.id}>
            <tr>
              <td>
                <MDBBadge color="secondary" pill>
                  {sn++}
                </MDBBadge>
              </td>
              <td>
                <p
                  className="fw-normal mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/product/" + item.product_id);
                  }}
                >
                  {item.product_name}
                </p>
              </td>
              <td>
                <p className="fw-normal mb-2">{item.comments}</p>
              </td>
              <td>
                <MDBBtn
                  color="success"
                  size="md"
                  onClick={() => {
                    setproduct_name(item.product_name);
                    setproduct_price(item.price);
                    setproduct_status(item.status);
                    setfile_seller(item.file_seller);
                    setcomments_seller(item.comments_seller);
                    setproductid(item.product_id);
                    setseller_id(item.seller_id);
                    setorder_id(item.id);
                    toggleShow();
                  }}
                >
                  <MDBIcon fas icon="info me-2" /> Get information
                </MDBBtn>
              </td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader className="border-bottom-0">
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            {!isRating ? (
              <MDBModalBody className="text-start text-black p-4">
                <MDBTypography
                  tag="p"
                  className="modal-title text-uppercase mb-5"
                  id="exampleModalLabel"
                >
                  <p>Order Id: {order_id}</p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/viewprofile/" + seller_id);
                    }}
                  >
                    Seller Id: {seller_id}
                  </p>
                </MDBTypography>
                <MDBTypography
                  tag="h4"
                  className="mb-2"
                  style={{ color: "#00BF63" }}
                >
                  Thanks for your order, {username}!
                </MDBTypography>
                <p className="mb-0" style={{ color: "#00BF63" }}>
                  Payment summary
                </p>
                <hr
                  className="mt-2 mb-4"
                  style={{
                    height: "0",
                    backgroundColor: "transparent",
                    opacity: ".75",
                    borderTop: "2px dashed #9e9e9e",
                  }}
                />

                <div className="d-flex justify-content-between">
                  <p className="fw-bold mb-0">
                    {product_name}
                    (Qty:1)
                  </p>
                  <p className="text-muted mb-0">Rs. {product_price}</p>
                </div>

                <div className="d-flex justify-content-between pb-1">
                  <p className="small">Tax</p>
                  <p className="small">Rs. 0</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Total</p>
                  <p className="fw-bold" style={{ color: "#00BF63" }}>
                    Rs. {product_price}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Order Status</p>
                  <p className="fw-bold">
                    {product_status === "success" ? (
                      <div>
                        <p>Paid</p>
                      </div>
                    ) : (
                      <p>Delivered</p>
                    )}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Comments from Seller:</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>{comments_seller}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Attachments</p>

                  {file_seller ? (
                    <>
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

                      <div>
                        <MDBBtn
                          rounded
                          color="success"
                          size="sm"
                          onClick={() => {
                            setisRating(true);
                          }}
                          id="rateorder"
                        >
                          <MDBIcon far icon="edit" /> Rate Order
                        </MDBBtn>
                      </div>
                    </>
                  ) : (
                    <p>No attachments</p>
                  )}
                </div>
              </MDBModalBody>
            ) : (
              <>
                <MDBModalBody className="text-start text-black p-4">
                  <div
                    onClick={() => {
                      setisRating(false);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <MDBIcon fas icon="angle-left" /> Go Back
                  </div>
                  <br></br>
                  <MDBTypography
                    tag="h5"
                    className="modal-title mb-5 w-100 d-flex justify-content-center"
                  >
                    <div className=" d-flex flex-column align-items-center ">
                      Rate Order
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
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Write a review"
                        onChange={(e) => {
                          setReview(e.target.value);
                        }}
                      ></textarea>
                      <br></br>
                      <MDBBtn
                        rounded
                        color="success"
                        size="sm"
                        onClick={() => {
                          addReview();
                          alert("Review added successfully");
                          navigate("/product/" + productid);
                        }}
                      >
                        <MDBIcon far icon="edit" /> Submit
                      </MDBBtn>
                    </div>
                  </MDBTypography>
                </MDBModalBody>
              </>
            )}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default UserOrders;
