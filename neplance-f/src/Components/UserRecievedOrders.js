import React from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserRecievedOrders() {
  const seller_id = JSON.parse(localStorage.getItem("user-info")).user.id;
  var sn = 1;
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
          <MDBTableBody key={item.order_id}>
            <tr
              style={{ cursor: "pointer" }}
            >
              <td>
                <MDBBadge color="secondary" pill>
                  {sn++}
                </MDBBadge>
              </td>
              <td>{item.product_name}</td>
              <td>
                <p className="fw-normal mb-2">{item.product_id}</p>
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
                  <p>Delivered</p>
                )}
              </td>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </div>
  );
}

export default UserRecievedOrders;
