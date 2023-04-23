import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

function SearchComponent() {
  const [d3, setD3] = useState([]);
  const navigate = useNavigate();

  async function search(key) {
    if (key.length > 1) {
      let result = await fetch("http://localhost:8000/api/search/" + key);
      result = await result.json();
      setD3(result.reverse());
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container py-5">
        <p style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          <MDBIcon fas icon="angle-left" /> Back
        </p>
        <div className="col-sm-6 offset-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Services 🔍"
            onChange={(e) => {
              search(e.target.value);
            }}
            style={{
              borderRadius: "100px",
              marginTop: "50px",
              textAlign: "center",
            }}
          />
        </div>
        <section>
          <div className="container">
            <div className="row py-5">
              {d3.length > 0 ? (
                d3.map((item) => (
                  <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100 w-60">
                      <a
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={"http://localhost:8000/" + item.file_path}
                          className="card-img-top"
                        />
                      </a>
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
                        <a className="h3 text-decoration-none text-dark">
                          {item.name}
                        </a>
                        <p className="card-text text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center" }}>
                  Use the search bar above to search for services matching your
                  requirements!
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default SearchComponent;
