import React from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AdminHome() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getTotalCounts");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <MDBContainer>
          <div className="dashboard">
            <MDBRow className="d-flex gap-5">
              <MDBCard
                className="card"
                style={{
                  width: "22rem",
                  height: "10rem",
                  backgroundColor: "#E8F5E9",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/viewusers")}
              >
                <MDBCardBody className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3>{data.users}</h3>
                    <p className="mb-0">Total Users</p>
                  </div>
                  <MDBIcon icon="user" className="orange-text" size="2x" />
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="card"
                style={{
                  width: "22rem",
                  height: "10rem",
                  backgroundColor: "#E1F5FE",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/viewservices")}
              >
                <MDBCardBody className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3>{data.products}</h3>
                    <p className="mb-0">Total Services</p>
                  </div>
                  <MDBIcon icon="box" className="green-text" size="2x" />
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="card"
                style={{
                  width: "22rem",
                  height: "10rem",
                  backgroundColor: "#F5F5DC",
                  cursor: "pointer",
                }}
              >
                <MDBCardBody className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3>{data.orders}</h3>
                    <p className="mb-0">Total Sales</p>
                  </div>
                  <MDBIcon
                    icon="shopping-cart"
                    className="blue-text"
                    size="2x"
                  />
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="card"
                style={{
                  width: "22rem",
                  height: "10rem",
                  backgroundColor: "#E1BEE7",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/viewrequests")}
              >
                <MDBCardBody className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3>{data.requests}</h3>
                    <p className="mb-0">Pending Requests</p>
                  </div>
                  <MDBIcon
                    icon="clipboard-list"
                    className="purple-text"
                    size="2x"
                  />
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="card"
                style={{
                  width: "22rem",
                  height: "10rem",
                  backgroundColor: "#FFEBEE",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/viewreviews")}
              >
                <MDBCardBody className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3>{data.reviews}</h3>
                    <p className="mb-0">Total Reviews</p>
                  </div>
                  <MDBIcon icon="star" className="yellow-text" size="2x" />
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="card"
                style={{
                  width: "22rem",
                  height: "10rem",
                  backgroundColor: "#FFF9C4",
                  cursor: "pointer",
                }}
              >
                <MDBCardBody className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3>{data.freelancers}</h3>
                    <p className="mb-0">Total Freelancers</p>
                  </div>
                  <MDBIcon icon="user" className="orange-text" size="2x" />
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          </div>
        </MDBContainer>
      </motion.div>
    </>
  );
}

export default AdminHome;
