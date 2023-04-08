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
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserListings from "./UserListings";
import UserOrders from "./UserOrders";
import UserRecievedOrders from "./UserRecievedOrders";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect } from "react";
import UserReviews from "./UserReviews";

export default function UserProfile() {
  const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getUser/" + userid);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const [key, setKey] = useState("orders");
  const navigate = useNavigate();
  function AddProduct() {
    navigate("/addproduct");
  }

  function logout() {
    localStorage.clear();
    navigate("/home");
    window.location.reload(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      
      <MDBContainer className="py-2 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol >
            <MDBCard>
            <div className="d-flex justify-content-end text-center py-1 gap-4">
                    <MDBBtn onClick={logout} rounded  color="danger" style={{height: '36px', overflow: 'visible', marginRight:"2px"}}>
                      <MDBIcon fas icon="sign-out-alt" className="me-2" />
                      Logout
                    </MDBBtn>
                  </div>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#00BF63', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={"http://localhost:8000/" + data.file_path}
                    alt="Profile Picture" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h3">{data.name}</MDBTypography>
                  <MDBTypography tag="h5">{data.designation}</MDBTypography>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1 gap-4">
                  <div>
                  <MDBBtn onClick={AddProduct} rounded outline color="success" style={{height: '36px', overflow: 'visible'}}>
                    <MDBIcon fas icon="plus" className="me-2" />
                    Add Service
                  </MDBBtn>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Servies</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                  </div>
                  
                </div>
              </div>
              </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
      <MDBContainer style={{ marginTop: "5px" }}>
        <MDBRow className="justify-content-left">
          <MDBCol>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="orders" title="Ordered Services">
                <UserOrders />
              </Tab>
              <Tab eventKey="listings" title="Your Services">
                <UserListings />
              </Tab>
              <Tab eventKey="recieved" title="Recieved Orders">
                <UserRecievedOrders />
              </Tab>
              <Tab eventKey="reviews" title="Your Reviews">
                <UserReviews />
              </Tab>
            </Tabs>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </motion.div>
  );
}
