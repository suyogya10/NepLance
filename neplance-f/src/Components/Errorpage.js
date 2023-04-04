import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Errorpage() {
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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="errorpage">
              <h1 className="error-text">404</h1>
              <p>Page Not Found</p>
              <MDBBtn rounded className="btn btn-success" onClick={gohome}>
                Go Back
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Errorpage;
