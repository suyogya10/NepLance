import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import img from "./Assets/LoginBG.png";
import { Alert } from "react-bootstrap";
import { useNotification } from "use-toast-notification";

function ForgotPassword() {
  const notification = useNotification();
  const navigate = useNavigate(); // useNavigate is used to redirect to another page
  const [alert, setAlert] = useState("valinum");

  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [newpassword, setNewPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, [navigate]);

  function getOTP() {
    let formData = new FormData();
    formData.append("number", number);
    fetch("http://localhost:8000/api/requestOTP/" + "?_method=PUT", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(number);
        if (result == "Invalid Mobile Number") {
          setAlert("invalidnum");
        } else {
          setAlert("validnum");
          document.getElementById("passbtn").hidden = false;
          document.getElementById("otp").disabled = false;
          document.getElementById("floatingPassword").disabled = false;
          document.getElementById("mobileNumber").disabled = true;
          document.getElementById("otpbtn").hidden = true;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function forgotPasswordChange() {
    let formData = new FormData();
    formData.append("otp", otp);
    formData.append("newpassword", newpassword);
    fetch("http://localhost:8000/api/forgotPasswordChange/" + "?_method=PUT", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(number);
        if (result == "OTP does not match") {
          setAlert("invaliotp");
        } else {
          setAlert("validnum");
          notification.show({
            message: `Password Changed Successfully! Login to continue.`,
            title: "Password Updated",
            variant: "success",
          });
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          <div className="col">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h2 className="loginheading">Reset Password</h2>
                    <br></br>
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="mobileNumber"
                          onChange={(e) => setNumber(e.target.value)} // onChange is used to get the value of the input field
                        />
                        <label for="floatingInput">Mobile Number</label>
                      </div>

                      <div className="form-floating mt-3">
                        <input
                          className="form-control"
                          id="otp"
                          onChange={(e) => setOtp(e.target.value)}
                          disabled
                        />
                        <label for="floatingInput">OTP</label>
                      </div>
                      <div className="form-floating mt-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          onChange={(e) => setNewPassword(e.target.value)}
                          disabled
                        />
                        <label for="floatingPassword">New Password</label>
                      </div>

                      <div className="d-grid mt-3">
                        <MDBBtn
                          type="button"
                          rounded
                          color="success"
                          id="otpbtn"
                          onClick={getOTP}
                        >
                          Get OTP
                        </MDBBtn>
                        <MDBBtn
                          type="button"
                          rounded
                          color="success"
                          id="passbtn"
                          hidden
                          onClick={forgotPasswordChange}
                        >
                          Change Password
                        </MDBBtn>
                        <br></br>

                        {alert !== null && alert == "invalidnum" && (
                          <Alert
                            variant={"warning"}
                            closeLabel="Close alert"
                            closeVariant="black"
                            dismissible
                            onClose={() => setAlert(null)}
                          >
                            Invalid Mobile Number! Please try again.
                          </Alert>
                        )}
                        {alert !== null && alert == "invalidotp" && (
                          <Alert
                            variant={"warning"}
                            closeLabel="Close alert"
                            closeVariant="black"
                            dismissible
                            onClose={() => setAlert(null)}
                          >
                            Invalid OTP! Please try again.
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

export default ForgotPassword;
