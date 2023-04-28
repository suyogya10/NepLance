import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";
import client from "./Assets/client.png";
import freelancer from "./Assets/freelancer.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Test() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <MDBContainer
      className="d-flex py-5 h-100"
      style={{ justifyContent: "center", marginTop: "100px" }}
    >
      <div className="row d-flex gap-5" style={{ justifyContent: "center" }}>
        <MDBCard style={{ width: "500px", cursor: "pointer" }}>
          <MDBCardImage src={client} position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Continue as Client</h3>
            </MDBCardTitle>
            <MDBCardText>
              As a client you can browse through the list of freelancers and
              their services and hire them for your work. You can visit the
              profile of the freelancer and see their latest services, reviews
              and ratings. Pay the freelancer after the work is done via Khalti.
              You can also chat with the freelancers.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          style={{ width: "500px", cursor: "pointer" }}
          onClick={() => {
            navigate("/becomeseller");
          }}
        >
          <MDBCardImage src={freelancer} position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>
              <h3>Become a Freelancer</h3>
            </MDBCardTitle>
            <MDBCardText>
              As a freelancer you can create your profile and add your services.
              You can see the list of orders from clients who have purchased
              your service and deliver the results to them. You can also see the
              reviews and ratings given by the clients. You will also have all
              the abilities of a client.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
    </motion.div>
  );
}
