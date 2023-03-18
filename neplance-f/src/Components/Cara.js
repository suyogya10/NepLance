import React from "react";
import { MDBBtn, MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import img from "./Assets/banner2.png";
import img2 from "./Assets/banner3.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Cara() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();

  function post () {
    navigate("/addproduct");
  }

  function getStarted() {
    navigate("/register");
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="cara"
    >
      <MDBCarousel>
        {localStorage.getItem("user-info") ? ( // if user is logged in}
          <MDBCarouselItem className="d-block " itemId={1} src={img2}>
            <h5>Start Earning Today</h5>
            <p>
              Post your skills, sell them and earn money!
            </p>
            <MDBBtn
              rounded
              color="light"
              rippleColor="dark"
              onClick={post}
            >
              Post Now
            </MDBBtn>
          </MDBCarouselItem>
        ) : (
          <MDBCarouselItem className="d-block " itemId={1} src={img}>
            <h5>Join us Today!</h5>
            <p>
              Find the best freelancers in Nepal or sell your skills and earn!
            </p>
            <MDBBtn
              rounded
              color="light"
              rippleColor="dark"
              onClick={getStarted}
            >
              Register Now
            </MDBBtn>
          </MDBCarouselItem>
        )}
      </MDBCarousel>
    </motion.div>
  );
}

export default Cara;
