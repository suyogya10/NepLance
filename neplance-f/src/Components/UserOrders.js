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
  const[file_seller,setfile_seller]=useState("");
  const[comments_seller,setcomments_seller]=useState("");
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
          <MDBTableBody key={item.order_id}>
            <tr>
              <td>
                <MDBBadge color="secondary" pill>
                  {sn++}
                </MDBBadge>
              </td>
              <td>
                <p className="fw-normal mb-2">{item.product_name}</p>
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
            <MDBModalBody className="text-start text-black p-4">
              <MDBTypography
                tag="h5"
                className="modal-title text-uppercase mb-5"
                id="exampleModalLabel"
              >
                {username}
              </MDBTypography>
              <MDBTypography
                tag="h4"
                className="mb-2"
                style={{ color: "#00BF63" }}
              >
                Thanks for your order
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
                <p>
                  {comments_seller}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Attachments</p>
                {
                  file_seller ? (
                    <MDBBtn rounded color="success" size="sm"
                    style={{maxHeight:"30px"}}
                    onClick={() => {
                      window.open("http://localhost:8000/"+file_seller);
                    }
                  }
                    >
                    <MDBIcon fas icon="download me-2" /> Download
                  </MDBBtn>
                  ) : (
                    <p>No attachments</p>
                  )

                }
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default UserOrders;
