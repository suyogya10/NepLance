import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MDBBtn } from "mdb-react-ui-kit";
import img from "./Assets/RegisterBG.png";
import { Alert } from "react-bootstrap";

function Register() {
  const [name, setName] = useState(""); // user is the state variable and setName is the function to update the state
  const [email, setEmail] = useState(""); // email is the state variable and setEmail is the function to update the state
  const [password, setPassword] = useState(""); // password is the state variable and setPassword is the function to update the state
  const [phone, setPhone] = useState(""); // number is the state variable and setNumber is the function to update the state
  const navigate = useNavigate(); // useNavigate is used to redirect to another page
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);

  async function SignUp() {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);

    let result = await fetch("http://localhost:8000/api/register", {
      // await is used to wait for the response from the server
      method: "POST", // method is used to specify the type of request to be sent to the server
      body: formData, // used to send the data to the server in JSON format
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error || result.errors) {
          setError(JSON.stringify(result.error || result.errors));
          setAlert(false);
          navigate("/register");
        } else {
          console.log(result);
          navigate("/otp");
        }
      });
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
          <div
            class="d-none d-md-flex col-md-4 col-lg-6"
            style={{ maxHeight: "600px" }}
          >
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
                          type="text"
                          class="form-control"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="floatingInput">Username</label>
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
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          value={phone}
                          placeholder="Designation"
                          onChange={(e) => setPhone(e.target.value)} // onChange event is used to update the state
                        />
                        <label for="floatingInput">Number (+977)</label>
                      </div>
                      {/* <div class="form-floating mb-3">
                        <input
                          className="form-control"
                          type="file"
                          id="formFileMultiple"
                          multiple
                          
                          onChange={(e) => setFile(e.target.files[0])}
                        ></input>
                      </div> */}

                      <div class="d-grid">
                        <MDBBtn type="button" color="success" onClick={SignUp}>
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
                        {alert !== null && alert === false && (
                          <Alert
                            variant={"danger"}
                            closeLabel="Close alert"
                            closeVariant="black"
                            dismissible
                            onClose={() => setAlert(null)}
                          >
                            {JSON.parse(error).name && (
                              <> {JSON.parse(error).name} </>
                            )}
                            {JSON.parse(error).email && (
                              <> Username already exists </>
                            )}
                            {JSON.parse(error).password && (
                              <> {JSON.parse(error).password} </>
                            )}
                            {JSON.parse(error).phone && (
                              <> {JSON.parse(error).phone} </>
                            )}
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

export default Register;
