import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import webdev from "./Assets/webdev.jpg";
import writing from "./Assets/writing.png";
import video from "./Assets/video.png";
import { Link, useNavigate } from "react-router-dom";

function HomeCards() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getProducts");
    result = await result.json();
    setData(result.reverse());
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
        <section className="container py-5">
          <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Popular Categories</h1>
              <p>
                If you're looking for inspiration or guidance on what to explore
                next, our popular categories section is the perfect place to
                start. Here, you'll find a curated collection of some of the
                most frequently searched and sought-after topics on our website.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
              <a style={{cursor:"pointer"}}>
                <img src={webdev} className="rounded-circle img-fluid border" onClick={a} />
              </a>
              <h5 className="text-center mt-3 mb-3">Computer & IT</h5>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a style={{cursor:"pointer"}}>
                <img
                  src={writing}
                  className="rounded-circle img-fluid border"
                  onClick={b}
                />
              </a>
              <h2 className="h5 text-center mt-3 mb-3">Writing</h2>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a style={{cursor:"pointer"}} >
                <img src={video} className="rounded-circle img-fluid border"  onClick={c} />
              </a>
              <h2 className="h5 text-center mt-3 mb-3">Design & Editing</h2>
            </div>
          </div>
        </section>
        <section >
          <div className="container">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">Latest Listings</h1>
                <p>
                  With new additions on a regular basis, there's always
                  something fresh and exciting to discover.
                </p>
              </div>
            </div>
            <div className="row">
              {data
                .slice(0, 6)
                .map((item) => (
                  <div
                    key={item.id}
                    className="col-12 col-md-4 mb-4"
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                    }}
                  >
                    <div className="card h-100 w-60">
                      <img
                        src={"http://localhost:8000/" + item.file_path}
                        className="card-img-top"
                        style={{ cursor: "pointer" }}
                      />
                      <div className="card-body">
                        <ul className="list-unstyled d-flex justify-content-between">
                          <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                          </li>
                          <li className="text-muted text-right">
                            Rs.{item.price}
                          </li>
                        </ul>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate(`/product/${item.id}`);
                          }}
                          className="h3 text-decoration-none text-dark"
                        >
                          {item.name}
                        </a>
                        <p className="card-text text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
    </motion.div>
  );
}

export default HomeCards;
