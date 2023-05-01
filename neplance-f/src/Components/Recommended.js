import React from "react";
import { motion } from "framer-motion";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardImage,
  MDBBtn,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Recommended() {
  const navigate = useNavigate();
  const [freelancerData, setfreelancerData] = useState([]); // [
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch(
      "http://localhost:8000/api/getRecommended/" +
        JSON.parse(localStorage.getItem("user-info")).user.id
    );
    result = await result.json();
    setData(result.reverse());
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const ApiHandler2 = async () => {
    let result2 = await fetch("http://localhost:8000/api/topRated");
    const data2 = await result2.json();
    setfreelancerData(data2);
  };
  useEffect(() => {
    ApiHandler2();
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container py-5">
          {localStorage.getItem("user-info") ? (
            <>
              <div className="row">
                <h4>
                  Recommended for you <MDBIcon fas icon="chevron-right" />
                </h4>
              </div>
              <div className="row">
                {data.slice(0, 3).map((item) => {
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
                          <p className="card-text text-muted">
                            {shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <> </>
          )}
          <div className="row py-5 d-flex gap-2">
            <h4>
              Highest rated freelancers <MDBIcon fas icon="chevron-right" />
            </h4>
            {freelancerData.slice(0, 4).map((item) => (
              <MDBCard
                key={item.sellerid}
                style={{
                  borderRadius: "15px",
                  maxWidth: "320px",
                  maxHeight: "155px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/viewprofile/" + item.sellerid);
                }}
              >
                <MDBCardBody>
                  <div className="d-flex text-black">
                    <div>
                      <MDBCardImage
                        style={{
                          maxWidth: "100px",
                          borderRadius: "20px",
                          maxHeight: "100px",
                        }}
                        src={"http://localhost:8000/" + item.file_path}
                        alt="Generic placeholder image"
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <MDBCardTitle>{item.name}</MDBCardTitle>
                      <MDBCardText>{item.designation}</MDBCardText>
                      <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                          <i
                            className={`${
                              parseInt(
                                item.avg_rating >= 3.5
                                  ? Math.ceil(item.avg_rating)
                                  : Math.floor(item.avg_rating)
                              ) >= 1
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                          <i
                            className={`${
                              parseInt(
                                item.avg_rating >= 3.5
                                  ? Math.ceil(item.avg_rating)
                                  : Math.floor(item.avg_rating)
                              ) >= 2
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                          <i
                            className={`${
                              parseInt(
                                item.avg_rating >= 3.5
                                  ? Math.ceil(item.avg_rating)
                                  : Math.floor(item.avg_rating)
                              ) >= 3
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                          <i
                            className={`${
                              parseInt(
                                item.avg_rating >= 3.5
                                  ? Math.ceil(item.avg_rating)
                                  : Math.floor(item.avg_rating)
                              ) >= 4
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                          <i
                            className={`${
                              parseInt(
                                item.avg_rating >= 3.5
                                  ? Math.ceil(item.avg_rating)
                                  : Math.floor(item.avg_rating)
                              ) >= 5
                                ? "text-warning"
                                : "text-muted"
                            } fa fa-star `}
                          ></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Recommended;
