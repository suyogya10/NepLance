import React from "react";
import Cara from "./Cara";
import HomeCards from "./HomeCards";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Recommended from "./Recommended";
import { Container } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Cara />
        <div
          style={{
            backgroundColor: "#00BF63",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Container className="text-center">
            <MDBBtn
              rounded
              color="light"
              style={{
                borderRadius: "100px",
                textAlign: "center",
                width: "500px",
              }}
              onClick={() => navigate("/search")}
            >
              Search for Services
              <MDBIcon fas icon="search" className="ms-2" />
            </MDBBtn>
            <div style={{ color: "#00BF63", minHeight: "20px" }}> </div>
          </Container>
        </div>

        <div>
          <Recommended />
        </div>
        <HomeCards />
      </div>
    </motion.div>
  );
}

export default Home;
