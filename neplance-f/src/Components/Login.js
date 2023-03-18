import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import AuthUser from "./AuthUser";
import img from "./Assets/LoginBG.png";


function Login() {
  const navigate = useNavigate(); // useNavigate is used to redirect to another page
  const [email, setEmail] = useState(""); // useState is used to store the value of the input field
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, [navigate]);

  async function login() {
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      // await is used to wait for the response from the server
      method: "POST", // method is used to specify the type of request to be sent to the server
      headers: {
        // headers are used to send the data in JSON format
        "Content-Type": "application/json",
        Accept: "application/json", // accept the data in JSON format
        
      },
      body: JSON.stringify(item), // used to send the data to the server in JSON format
    }); // fetch is used to send the data to the backend
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result)); // store the data in the local storage
    navigate("/home"); // redirect to the homepage

    if (result.error) {
      localStorage.clear();
      alert("Invalid Login");
      navigate("/login");
    }
  }

  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      exit={{ opacity: 0 }}>
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6">
              <img src={img} alt="login" className="img-fluid bg-image" />
            </div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h2 className="loginheading">Welcome back!</h2>
                      <br></br>
                      <form>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)} // onChange is used to get the value of the input field
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label for="floatingPassword">Password</label>
                        </div>

                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                           
                            value=""
                            id="rememberPasswordCheck"
                          checked/>
                          <label
                            className="form-check-label"
                            for="rememberPasswordCheck"
                          >
                            Remember password
                          </label>
                        </div>

                        <div className="d-grid">
                          <MDBBtn color="primary" onClick={login}>Sign in</MDBBtn>
                          
                          <div className="text-center">
                          <a>OR</a>
                          <br></br>
                            <a className="small" href="#">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  );
}

export default Login;
