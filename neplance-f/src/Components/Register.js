import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MDBBtn } from "mdb-react-ui-kit";
import img from "./Assets/RegisterBG.png";

function Register() {
  const [name, setName] = useState(""); // user is the state variable and setName is the function to update the state
  const [email, setEmail] = useState(""); // email is the state variable and setEmail is the function to update the state
  const [password, setPassword] = useState(""); // password is the state variable and setPassword is the function to update the state
  const [designation, setDesignation] = useState(""); // designation is the state variable and setDesignation is the function to update the state
  const [file, setFile] = useState("");
  const navigate = useNavigate(); // useNavigate is used to redirect to another page

  async function SignUp() {
    // async function is used to make the function asynchronous
    let item = { name, email, password, designation, file }; // item is an object with the values of the state variables
    console.warn(item);
    let result = await fetch("http://localhost:8000/api/register", {
      // await is used to wait for the response from the server
      method: "POST", // method is used to specify the type of request to be sent to the server
      body: JSON.stringify(item), // used to send the data to the server in JSON format
      headers: {
        // headers are used to send the data in JSON format
        "Content-Type": "application/json",
        Accept: "application/json", // accept the data in JSON format
      },
    });
    result = await result.json();
    // localStorage.setItem("user-info", JSON.stringify(result)); // store the data in the local storage
    navigate("/login"); // redirect to the homepage
  }

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div class="container-fluid ps-md-0">
        <div class="row g-0">
          <div class="d-none d-md-flex col-md-4 col-lg-6">
            <img src={img} alt="Register" class="img-fluid bg-image" />
          </div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="loginheading">Welcome to NepLance!</h3>
                    <br></br>
                    <form>
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)} // onChange event is used to update the state
                        />
                        <label for="floatingInput">Full Name</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="floatingInput">Email address</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="password" // type is set to password so that the password is not visible
                          class="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label for="floatingPassword">Password</label>
                      </div>
                      {/* <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          value={designation}
                          placeholder="Designation"
                          onChange={(e) => setDesignation(e.target.value)} // onChange event is used to update the state
                        />
                        <label for="floatingInput">Designation</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          className="form-control"
                          type="file"
                          id="formFileMultiple"
                          multiple
                          
                          onChange={(e) => setFile(e.target.files[0])}
                        ></input>
                      </div> */}

                      <div class="d-grid">
                        <MDBBtn color="success" onClick={SignUp}>
                          Register
                        </MDBBtn>
                        <div class="text-center">
                          <span>OR</span>
                          <br></br>
                          <a class="small" href="#">
                            <Link to="/login">
                              Already have an account? Login
                            </Link>
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

export default Register;
