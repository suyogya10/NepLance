import React from "react";
import Cara from "./Cara";
import HomeCards from "./HomeCards";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Recommended from "./Recommended";

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
        <div style={{ backgroundColor: "#00BF63" }}>
          <div className="col-sm-4 offset-sm-4 m-auto">
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
          </div>
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
