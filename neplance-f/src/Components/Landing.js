import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import img from "./Assets/landing.png";
import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  function gohome() {
    navigate("/home");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="landingpage">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h1 className="landing-text">Welcome to NepLance</h1>
                <p>
                  NepLance is a freelancing platform that connects businesses
                  with independent professionals. We are a community of
                  freelancers from all over Nepal. We are here to help you grow
                  your business and achieve your goals.
                </p>
                <MDBBtn rounded className="btn btn-success" onClick={gohome}>
                  Get Started
                </MDBBtn>
              </div>
            </div>
            <div className="col-md-8">
                <img src={img} alt="landing" className="landimg" />
                </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
