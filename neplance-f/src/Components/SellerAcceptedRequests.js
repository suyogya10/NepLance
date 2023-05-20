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
  MDBModalTitle,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SellerAcceptedRequests() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const sellerid = JSON.parse(localStorage.getItem("user-info")).user.id;
  var sn = 1;
  const navigate = useNavigate();
  const [postData, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [postStatus, setPostStatus] = useState("");
  const [bid, setBid] = useState("");
  const [token, setToken] = useState("");

  const ApiHandler = async () => {
    let result = await fetch(
      "http://localhost:8000/api/getRequestBySeller/" + sellerid
    );
    result = await result.json();
    setData(result.reverse());
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const [comments_seller, setComments_seller] = useState("");
  const [file_seller, setFile_seller] = useState("");
  const [delivery_id, setDelivery_id] = useState("");

  function Delivery(key) {
    let formData = new FormData();
    formData.append("file_seller", file_seller);
    formData.append("comments_seller", comments_seller);
    fetch("http://localhost:8000/api/Delivery/" + key + "?_method=PUT", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        toggleShow();
        ApiHandler();
      });
    });
  }

  return (
    <>
      <div className="flex-grow-1 ms-3">
        <h3 className="profiletitle2">Request Status</h3>
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
                Status
              </th>
              <th scope="col" className="fw-bold">
                Delivery Status
              </th>
            </tr>
          </MDBTableHead>
          {postData.map((item) => (
            <MDBTableBody key={item.id}>
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => {
                  toggleShow();
                  setName(item.name);
                  setPrice(item.price);
                  setDescription(item.description);
                  setCategory(item.category);
                  setDate(item.delivery_date);
                  setPostStatus(item.status);
                  setBid(item.seller_bid);
                  setToken(item.payment_token);
                  setDelivery_id(item.id);
                }}
              >
                <td>
                  <MDBBadge color="secondary" pill>
                    {sn++}
                  </MDBBadge>
                </td>
                <td>
                  <p className="fw-normal mb-2" style={{ cursor: "pointer" }}>
                    {item.name}
                  </p>
                </td>
                <td>
                  <p className="fw-normal mb-2">Rs. {item.price}</p>
                </td>
                <td>
                  {item.status === "Accepted" ? (
                    <MDBBadge color="success" pill>
                      {item.status}
                    </MDBBadge>
                  ) : (
                    <></>
                  )}
                  {item.status === "Not accepted yet" ? (
                    <MDBBadge color="success" pill>
                      {item.status}
                    </MDBBadge>
                  ) : (
                    <></>
                  )}
                  {item.status === "Accepted" && item.payment_token != null ? (
                    <MDBBadge color="success" pill>
                      Paid
                    </MDBBadge>
                  ) : (
                    <></>
                  )}
                </td>
                {item.file_seller === null ? (
                  <td>
                    <MDBBadge color="warning" pill>
                      Not Delivered
                    </MDBBadge>
                  </td>
                ) : (
                  <td>
                    <MDBBadge color="primary" pill>
                      Delivered
                    </MDBBadge>
                  </td>
                )}
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable>
      </div>
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
              {token != null ? (
                <>
                  Status:{" "}
                  <MDBBadge color="success" pill>
                    Paid
                  </MDBBadge>
                </>
              ) : (
                <>
                  Status:{" "}
                  <MDBBadge color="success" pill>
                    {postStatus}
                  </MDBBadge>
                  (Wait for the client to pay or chat with you)
                </>
              )}

              {token != null ? (
                <>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Write Comments to Client:</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={(e) => {
                        setComments_seller(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Send File to Client:</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        setFile_seller(e.target.files[0]);
                      }}
                    />
                  </div>
                  <hr />
                </>
              ) : (
                <></>
              )}
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              {token != null && comments_seller != "" ? (
                <MDBBtn
                  color="success"
                  onClick={() => {
                    Delivery(delivery_id);
                  }}
                >
                  Mark as Delivered
                </MDBBtn>
              ) : (
                <></>
              )}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default SellerAcceptedRequests;
