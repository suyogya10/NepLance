import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import img from "./Assets/LoginBG.png";
import { Alert } from "react-bootstrap";

function Login() {
  const navigate = useNavigate(); // useNavigate is used to redirect to another page
  const [email, setEmail] = useState(""); // useState is used to store the value of the input field
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, [navigate]);

  function register() {
    localStorage.clear();
    navigate("/register");
  }

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
    console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result)); // store the data in the local storage

    if (result.error === "User not verified") {
      localStorage.clear();
      navigate("/otp");
    }
    if (result.error === "User not found") {
      localStorage.clear();
      // alert("Invalid Username or Password");
      setAlert(false);
      navigate("/login");
    }
    if (result.error === "Password not match") {
      localStorage.clear();
      // alert("Invalid Username or Password");
      setAlert(false);
      navigate("/login");
    }

    if (
      JSON.parse(localStorage.getItem("user-info")).user.profile_setup != null
    ) {
      navigate("/home");
    } else {
      navigate("/test");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
                          className="form-control"
                          id="floatingInput"
                          placeholder="username"
                          onChange={(e) => setEmail(e.target.value)} // onChange is used to get the value of the input field
                        />
                        <label for="floatingInput">Username</label>
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

                      {/* <div className="form-check mb-3">
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
                        </div> */}

                      <div className="d-grid">
                        <MDBBtn
                          type="button"
                          rounded
                          color="success"
                          onClick={login}
                        >
                          Sign in
                        </MDBBtn>
                        <br></br>
                        <div className="text-center">
                          <a>OR</a>
                        </div>
                        <div>
                          <a
                            className="small"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/forgotpassword")}
                          >
                            Forgot Password?
                          </a>
                          <a
                            className="small"
                            onClick={register}
                            style={{ marginLeft: "250px", cursor: "pointer" }}
                          >
                            Create an Account?
                          </a>
                        </div>
                        {alert !== null && alert === false && (
                          <Alert
                            variant={"warning"}
                            closeLabel="Close alert"
                            closeVariant="black"
                            dismissible
                            onClose={() => setAlert(null)}
                          >
                            Invalid Credientials! Please try again.
                          </Alert>
                        )}
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
