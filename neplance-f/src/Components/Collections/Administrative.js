import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Administrative() {
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getProducts");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);
  const d2 = data.filter((item) => item.category === "administrative");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section class="bg-light">
        <div class="container py-5">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Administrative</h1>
            </div>
          </div>
          <div class="row">
            {d2.reverse().map((item) => (
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
    </motion.div>
  );
}

export default Administrative;
