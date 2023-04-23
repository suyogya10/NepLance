import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

function AccountingFinance() {
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
  const d1 = data.filter((item) => item.category === "accounting-finance");

  if (window.location.pathname === "/accounting-finance")
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
         <section class="bg-light">
        <div class="container py-5">
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/explore")}>
          <MDBIcon fas icon="angle-left" /> Back to Explore
        </p>
          <div class="row py-3">
              <h3>Explore - Accounting & Finance</h3>
          </div>
            <div class="row">
              {d1.reverse().map((item) => (
                <div class="col-12 col-md-4 mb-4">
                  <div class="card h-100 w-60">
                    <a onClick={() => {
                      navigate(`/product/${item.id}`);
                    }}>
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
      </motion.div>
    );
}

export default AccountingFinance;
