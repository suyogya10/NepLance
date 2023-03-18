import React, { useState, useEffect } from "react";
import {
  MDBBtn
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import webdev from "./Assets/webdev.jpg";
import writing from "./Assets/writing.png";
import video from "./Assets/video.png";
import { useNavigate } from "react-router-dom";

function HomeCards() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getProducts");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);
  
  function a() {
    navigate("/computer-it");
  }
  function b() {
    navigate("/writing");
  }
  function c() {
    navigate("/design-editing");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="app">
        <section class="container py-5">
          <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Popular Categories</h1>
              <p>
                If you're looking for inspiration or guidance on what to explore
                next, our popular categories section is the perfect place to
                start. Here, you'll find a curated collection of some of the
                most frequently searched and sought-after topics on our website.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img src={webdev} class="rounded-circle img-fluid border" />
              </a>
              <h5 class="text-center mt-3 mb-3">Computer & IT</h5>
              <p class="text-center">
                <MDBBtn rounded color="success" onClick={a}>
                  Browse
                </MDBBtn>
              </p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img src={writing} class="rounded-circle img-fluid border" />
              </a>
              <h2 class="h5 text-center mt-3 mb-3">Writing</h2>
              <p class="text-center">
                <MDBBtn rounded color="success" onClick={b}>
                  Browse
                </MDBBtn>
              </p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img src={video} class="rounded-circle img-fluid border" />
              </a>
              <h2 class="h5 text-center mt-3 mb-3">Design & Editing</h2>
              <p class="text-center">
                <MDBBtn rounded color="success" onClick={c}>
                  Browse
                </MDBBtn>
              </p>
            </div>
          </div>
        </section>

        <section class="bg-light">
          <div class="container py-5">
            <div class="row text-center py-3">
              <div class="col-lg-6 m-auto">
                <h1 class="h1">Latest Products</h1>
                <p>
                  With new additions on a regular basis, there's always
                  something fresh and exciting to discover.
                </p>
              </div>
            </div>
            <div class="row">
              {data.reverse().slice(0,6).map((item) => (
                <div class="col-12 col-md-4 mb-4">
                  <div class="card h-100 w-60">
                    <a href="#">
                      <img
                        src={"http://localhost:8000/" + item.file_path}
                        class="card-img-top"
                      />
                    </a>
                    <div class="card-body">
                      <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-warning fa fa-star"></i>
                          <i class="text-muted fa fa-star"></i>
                          <i class="text-muted fa fa-star"></i>
                        </li>
                        <li class="text-muted text-right">Rs.{item.price}</li>
                      </ul>
                      <a href="" class="h3 text-decoration-none text-dark">
                        {item.name}
                      </a>
                      <p class="card-text text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default HomeCards;
