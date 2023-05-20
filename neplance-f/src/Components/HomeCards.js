import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import writing from "./Assets/writing.png";
import webdev from "./Assets/webdev.jpg";
import design from "./Assets/designedit.png";
import { Link, useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

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

  const [reviewData, setreviewData] = useState([]);

  const ApiHandler3 = async () => {
    const result3 = await fetch("http://localhost:8000/api/getRatings");
    const resp3 = await result3.json();
    setreviewData(resp3.reverse());
  };
  useEffect(() => {
    ApiHandler3();
  }, []);

  function a() {
    navigate("/explore/computer-it");
  }
  function b() {
    navigate("/explore/writing");
  }
  function c() {
    navigate("/explore/design-editing");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="container">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Popular Categories</h1>
            <p>
              If you're looking for inspiration or guidance on what to explore
              next, our popular categories section is the perfect place to
              start. Here, you'll find a curated collection of some of the most
              frequently searched and sought-after topics on our website.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-3">
            <a style={{ cursor: "pointer" }}>
              <img
                src={webdev}
                className="rounded-circle img-fluid border"
                onClick={a}
              />
            </a>
            <h5 className="text-center mt-3 mb-3">Computer & IT</h5>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a style={{ cursor: "pointer" }}>
              <img
                src={writing}
                className="rounded-circle img-fluid border"
                onClick={b}
              />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Writing</h2>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a style={{ cursor: "pointer" }}>
              <img
                src={design}
                className="rounded-circle img-fluid border"
                onClick={c}
              />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Design & Editing</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row py-3">
            <div
              className="colm-auto"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid",
                borderTop: "1px solid",
                borderColor: "#e5e5e5",
                paddingBottom: "30px",
                paddingTop: "30px",
              }}
            >
              <h2>Latest Listings</h2>
            </div>
          </div>
          <div className="row">
            {data.slice(0, 9).map((item) => {
              const rating = reviewData.filter(
                (review) => review.productId === item.id
              );
              const averageRating =
                rating.length > 0 ? rating[0]["average_rating"] : 0;
              const shortDescription =
                item.description.length > 100
                  ? item.description.slice(0, 70) + "..."
                  : item.description;
              return (
                <div key={item.id} className="col-12 col-md-4 mb-4">
                  <div
                    className="card h-100 w-60"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <img
                      src={"http://localhost:8000/" + item.file_path}
                      className="card-img-top"
                      style={{
                        maxHeight: "150px",
                      }}
                    />
                    <div className="card-body">
                      <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                          <i
                            className={`${
                              parseInt(averageRating) >= 1
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                          <i
                            className={`${
                              parseInt(averageRating) >= 2
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                          <i
                            className={`${
                              parseInt(averageRating) >= 3
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                          <i
                            className={`${
                              parseInt(averageRating) >= 4
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                          <i
                            className={`${
                              parseInt(averageRating) >= 5
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                        </li>
                        <li className="text-muted text-right">
                          Rs.{item.price}
                        </li>
                      </ul>
                      <a className="h5 text-decoration-none text-dark">
                        {item.name}
                      </a>
                      <p className="card-text text-muted">{shortDescription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default HomeCards;
