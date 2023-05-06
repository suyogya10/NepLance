import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Alert } from "react-bootstrap";

function Adminlogin() {
  const navigate = useNavigate(); // useNavigate is used to redirect to another page
  const [username, setUsername] = useState(""); // useState is used to store the value of the input field
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    if (localStorage.getItem("admin-info")) {
      navigate("/adminhome");
    }
  }, []);

  async function Adminlogin() {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    fetch("http://localhost:8000/api/Adminlogin", {
      method: "POST",
      body: formData,
    })
      .then((result) => {
        result.json().then((resp) => {
          if (resp.error === "Invalid") {
            setAlert(false);
          } else {
            localStorage.setItem("admin-info", JSON.stringify(resp));
            navigate("/adminhome");
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            color: "black",
            marginTop: "50px",
          }}
        >
          Neplance Admin Login
        </h1>
        <br></br>
        <div
          className="container"
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <br></br>
          <form>
            <div className="form-floating mb-3">
              <input
                type="username"
                className="form-control"
                id="floatingInput"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)} // onChange is used to get the value of the input field
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-grid">
              <MDBBtn
                type="button"
                rounded
                color="success"
                onClick={Adminlogin}
              >
                Sign in
              </MDBBtn>
            </div>
          </form>
        </div>
        <div>
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
      </motion.div>
    </>
  );
}

export default Adminlogin;
