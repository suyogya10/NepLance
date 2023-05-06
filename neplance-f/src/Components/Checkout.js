import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const qnt = 1;
  const [product, setProduct] = useState([]);
  const [userData, setuserData] = useState([]);
  const [clientMessage, setClientMessage] = useState("N/A");
  const [file_client, setFile] = useState("");

  const ApiHandler = async () => {
    const result = await fetch(
      "http://localhost:8000/api/getSingleProduct/" + id
    );
    const resp = await result.json();
    setProduct(resp);
  };

  useEffect(() => {
    ApiHandler();
  }, []);

  const ApiHandler1 = async () => {
    const result1 = await fetch(
      "http://localhost:8000/api/getUser/" + product.userid
    );
    const resp1 = await result1.json();
    setuserData(resp1);
  };

  useEffect(() => {
    ApiHandler1();
  }, [product]);

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
        const seller_id = product.userid;
        const client_id = JSON.parse(localStorage.getItem("user-info")).user.id;
        let formData = new FormData();
        formData.append("seller_id", seller_id);
        formData.append("client_id", client_id);
        formData.append("product_id", product.id);
        formData.append("quantity", 1);
        formData.append("price", product.price);
        formData.append("comments", clientMessage);
        formData.append("product_name", product.name);
        // formData.append("payment_id", payload.paymentID);
        formData.append("token", payload.token);
        formData.append("status", "success");
        formData.append("file_client", file_client);

        fetch("http://localhost:8000/api/addOrder", {
          method: "POST",
          body: formData,
        }).then((result) => {
          result.json().then((resp) => {
            console.warn(resp);
          });
        });
        navigate("/user");
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
    checkout.show({ amount: 50000 });
  }

  return (
    <section className="h-100 h-custom">
      <MDBCard style={{ marginTop: "2px" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th scope="col" className="h5">
                      Review Your Order
                    </th>
                    <th scope="col">Comments from the client</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={"http://localhost:8000/" + product.file_path}
                          className="rounded-3"
                          style={{ width: "200px" }}
                          alt="Book"
                        />
                        <div className="flex-column ms-4">
                          <p className="mb-3">{product.name}</p>
                          <p className="mb-0">Listed By: {userData.name}</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <textarea
                        type="text"
                        placeholder="Enter your message here"
                        className="form-control"
                        onChange={(e) => {
                          setClientMessage(e.target.value);
                        }}
                      />
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </td>
                    <td className="align-middle">
                      <div class="d-flex flex-row align-items-center">
                        <MDBBtn className="px-2" color="link">
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>
                        {qnt}
                        <MDBBtn className="px-2" color="link">
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        Rs. {product.price}
                      </p>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCard
              className="shadow-2-strong mb-5 mb-lg-0"
              style={{ borderRadius: "20px" }}
            >
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol md="8" lg="6" xl="9" className="mb-4 mb-md-0">
                    <form>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            defaultChecked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className=" w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon
                              fas
                              icon="hand-holding-usd"
                              style={{ marginRight: "8px" }}
                            />
                            Khalti Wallet
                          </p>
                        </div>
                      </div>
                    </form>
                  </MDBCol>
                  <MDBCol lg="4" xl="3">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">Rs. {product.price}</p>
                    </div>
                    <hr className="my-4" />
                    <MDBBtn
                      block
                      size="lg"
                      rounded
                      id="payment-button"
                      onClick={pay}
                      style={{ backgroundColor: "#5C2D91" }}
                    >
                      <div className="d-flex justify-content-between">
                        <span>Pay With Khalti</span>
                        <span>Rs. {product.price}</span>
                      </div>
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </MDBCard>
    </section>
  );
}
