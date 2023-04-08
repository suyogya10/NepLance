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
                <MDBBtn color="success" size="md" onClick={toggleShow}>
                  <MDBIcon fas icon="info me-2" /> Get information
                </MDBBtn>
                <MDBModal
                  show={basicModal}
                  setShow={setBasicModal}
                  tabIndex="-1"
                >
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
                          className="mb-5"
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
                          <p className="fw-bold mb-0">{item.product_name}(Qty:1)</p>
                          <p className="text-muted mb-0">Rs. {item.price}</p>
                        </div>

                        <div className="d-flex justify-content-between pb-1">
                          <p className="small">Tax</p>
                          <p className="small">Rs. 0</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="fw-bold">Total</p>
                          <p className="fw-bold" style={{ color: "#00BF63" }}>
                            Rs. {item.price}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fw-bold">Order Status</p>
                          <p className="fw-bold" >
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
                              <p>Delivered</p>
                            )}
                          </p>
                        </div>
                      </MDBModalBody>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
              </td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </div>
  );
}

export default UserOrders;
