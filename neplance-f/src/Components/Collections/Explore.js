import React from "react";
import webdev from "../Assets/webdev.jpg";
import writing from "../Assets/writing.png";
import video from "../Assets/video.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Explore() {
  const navigate = useNavigate();

  function a() {
    navigate("/accounting-finance");
  }

  function b() {
    navigate("/administrative");
  }

  function c() {
    navigate("/computer-it");
  }

  function d() {
    navigate("/customer-service");
  }

  function e() {
    navigate("/design-editing");
  }

  function f() {
    navigate("/education-training");
  }

  function g() {
    navigate("/hr-recruit");
  }

  function h() {
    navigate("/medical-health");
  }

  function i() {
    navigate("/writing");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Explore Categories</h1>
            <p>
              Discover talented freelancers in a variety of categories. Connect
              with experienced professionals from around the world. Find the
              right freelancer for your budget and timeline.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={webdev}
              className="rounded-circle img-fluid border"
              onClick={a}
              style={{ cursor: "pointer" }}
            />

            <h5 className="text-center mt-3 mb-3">Accounting & Finance</h5>
          </div>

          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={writing}
              className="rounded-circle img-fluid border"
              onClick={b}
              style={{ cursor: "pointer" }}
            />

            <h2 className="h5 text-center mt-3 mb-3">Administrative</h2>
          </div>

          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={video}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={c}
            />

            <h2 className="h5 text-center mt-3 mb-3">Computer & IT</h2>
          </div>

          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={video}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={d}
            />

            <h2 className="h5 text-center mt-3 mb-3">Customer Service</h2>
          </div>

          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={video}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={e}
            />

            <h2 className="h5 text-center mt-3 mb-3">Design & Editing</h2>
          </div>

          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={video}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={f}
            />

            <h2 className="h5 text-center mt-3 mb-3">Education & Training</h2>
          </div>

          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={video}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={g}
            />

            <h2 className="h5 text-center mt-3 mb-3">HR & Recruiting</h2>
          </div>

          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={video}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={h}
            />

            <h2 className="h5 text-center mt-3 mb-3">Medical & Health</h2>
          </div>

          <div className="col-12 col-md-3 p-5 mt-3">
            <img
              src={writing}
              className="rounded-circle img-fluid border"
              style={{ cursor: "pointer" }}
              onClick={i}
            />
            <h2 className="h5 text-center mt-3 mb-3">Writing</h2>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Explore;
