import React from "react";
import webdev from "../Assets/webdev.jpg";
import writing from "../Assets/writing.png";
import video from "../Assets/video.png";
import customerservice from "../Assets/customerservice.png";
import designedit from "../Assets/designedit.png";
import education from "../Assets/education.png";
import hr from "../Assets/hr.png";
import med from "../Assets/med.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MDBIcon } from "mdb-react-ui-kit";

function Explore() {
  const navigate = useNavigate();

  function a() {
    navigate("/explore/account-finance");
  }

  function b() {
    navigate("/explore/administrative");
  }

  function c() {
    navigate("/explore/computer-it");
  }

  function d() {
    navigate("/explore/customerservice");
  }

  function e() {
    navigate("/explore/design-editing");
  }

  function f() {
    navigate("/explore/education-training");
  }

  function g() {
    navigate("/explore/hr-recruit");
  }

  function h() {
    navigate("/explore/medical-health");
  }

  function i() {
    navigate("/explore/writing");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="container py-5">
        <p style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          <MDBIcon fas icon="angle-left" /> Back
        </p>
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Explore Categories</h1>
            <p>
              Explore the right category for you and find the perfect service
              for you.
            </p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-3 p-5 mt-3">
            <img
              src={webdev}
              className="rounded-circle img-fluid border"
              onClick={a}
              style={{ cursor: "pointer" }}
            />

            <h5 className="text-center mt-3 mb-3">Accounting & Finance</h5>
          </div>

          <div className="col-md-3 p-5 mt-3">
            <img
              src={writing}
              className="rounded-circle img-fluid border"
              onClick={b}
              style={{ cursor: "pointer" }}
            />

            <h2 className="h5 text-center mt-3 mb-3">Administrative</h2>
          </div>

          <div className="col-md-3 p-5 mt-3">
            <img
              src={video}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={c}
            />

            <h2 className="h5 text-center mt-3 mb-3">Computer & IT</h2>
          </div>

          <div className="col-md-3 p-5 mt-3">
            <img
              src={customerservice}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={d}
            />

            <h2 className="h5 text-center mt-3 mb-3">Customer Service</h2>
          </div>

          <div className=" col-md-3 p-5 mt-3">
            <img
              src={designedit}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={e}
            />

            <h2 className="h5 text-center mt-3 mb-3">Design & Editing</h2>
          </div>

          <div className=" col-md-3 p-5 mt-3">
            <img
              src={education}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={f}
            />

            <h2 className="h5 text-center mt-3 mb-3">Education & Training</h2>
          </div>

          <div className=" col-md-3 p-5 mt-3">
            <img
              src={hr}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={g}
            />

            <h2 className="h5 text-center mt-3 mb-3">HR & Recruiting</h2>
          </div>

          <div className=" col-md-3 p-5 mt-3">
            <img
              src={med}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={h}
            />

            <h2 className="h5 text-center mt-3 mb-3">Medical & Health</h2>
          </div>

          <div className=" col-md-3 p-5 mt-3">
            <img
              src={writing}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={i}
            />
            <h2 className="h5 text-center mt-3 ">Writing</h2>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Explore;
