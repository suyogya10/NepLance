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

function UserRecievedOrders() {
  const seller_id = JSON.parse(localStorage.getItem("user-info")).user.id;
  var sn = 1;
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const navigate = useNavigate();
  const [orderdata, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch(
      "http://localhost:8000/api/getRecievedOrders/" + seller_id
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
  const [file_client, setfile_client] = useState("");
  const [comments_client, setcomments_client] = useState("");
  const [order_id, setorder_id] = useState("");
  const [client_id, setclient_id] = useState("");

  const [file_seller, setfile] = useState("");
  const [comments_seller, setcomments] = useState("");

  function Delivery() {
    let seller_name = JSON.parse(localStorage.getItem("user-info")).user.name;
    let formData = new FormData();
    formData.append("file_seller", file_seller);
    formData.append("comments_seller", comments_seller);
    formData.append("seller_name", seller_name);
    formData.append("client_id", client_id);
    fetch(
      "http://localhost:8000/api/sellerUpdateOrder/" +
        order_id +
        "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    ).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        toggleShow();
        ApiHandler();
      });
    });
  }

  return (
    <div className="flex-grow-1 ms-3">
      <h3 className="profiletitle2">Recieved Orders</h3>
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
              Order ID
            </th>
            <th scope="col" className="fw-bold">
              Comments by client
            </th>
            <th scope="col" className="fw-bold">
              Price
            </th>
            <th scope="col" className="fw-bold">
              Status
            </th>
          </tr>
        </MDBTableHead>
        {orderdata.map((item) => (
          <MDBTableBody key={item.id}>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                toggleShow();
                setproduct_name(item.product_name);
                setproduct_price(item.price);
                setproduct_status(item.status);
                setfile_client(item.file_client);
                setcomments_client(item.comments);
                setorder_id(item.id);
                setclient_id(item.client_id);
              }}
            >
              <td>
                <MDBBadge color="secondary" pill>
                  {sn++}
                </MDBBadge>
              </td>
              <td>{item.product_name}</td>
              <td>
                <p className="fw-normal mb-2">{item.id}</p>
              </td>
              <td>
                <p className="fw-normal mb-2">{item.comments}</p>
              </td>
              <td>Rs. {item.price}</td>
              <td>
                {item.status === "success" ? (
                  <div>
                    <MDBIcon
                      fas
                      icon="check-circle"
                      size="2x"
                      className="text-success"
                    />
                    <p>Paid</p>
                  </div>
                ) : (
                  <div>
                    <MDBIcon
                      fas
                      icon="check-circle"
                      size="2x"
                      className="text-primary"
                    />
                    <p>Delivered</p>
                  </div>
                )}
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
            <MDBModalBody className="text-start text-black p-4">
              <MDBTypography
                tag="h5"
                className="modal-title text-uppercase mb-5"
                id="exampleModalLabel"
              >
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/viewprofile/" + client_id);
                  }}
                >
                  Client ID: {client_id}
                </p>
                Order ID: {order_id}
              </MDBTypography>
              <MDBTypography
                tag="h4"
                className="mb-2"
                style={{ color: "#00BF63" }}
              >
                Recieved Order
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
                <p className="fw-bold">Comments from Client:</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>{comments_client}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">File attached by Client</p>
                {file_client ? (
                  <MDBBtn
                    rounded
                    color="success"
                    size="sm"
                    style={{ maxHeight: "30px" }}
                    onClick={() => {
                      window.open("http://localhost:8000/" + file_client);
                    }}
                  >
                    <MDBIcon fas icon="download me-2" /> Download
                  </MDBBtn>
                ) : (
                  <p className="fw-bold">No files attached</p>
                )}
              </div>
              {product_status === "success" ? (
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Comments from Seller:</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={(e) => {
                        setcomments(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Attach File:</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        setfile(e.target.files[0]);
                      }}
                    />
                  </div>
                  {comments_seller == "" ? (
                    <div className="d-flex justify-content-between">
                      <br></br>
                      <MDBBtn
                        onClick={Delivery}
                        rounded
                        color="success"
                        size="sm"
                        disabled
                        style={{ maxHeight: "30px", marginTop: "10px" }}
                      >
                        <MDBIcon fas icon="check me-2" /> Mark as Delivered
                      </MDBBtn>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-between">
                      <br></br>
                      <MDBBtn
                        onClick={Delivery}
                        rounded
                        color="success"
                        size="sm"
                        style={{ maxHeight: "30px", marginTop: "10px" }}
                      >
                        <MDBIcon fas icon="check me-2" /> Mark as Delivered
                      </MDBBtn>
                    </div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default UserRecievedOrders;
