import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Errorpage from "./Errorpage";
import { MDBBtn,MDBInput } from "mdb-react-ui-kit";
function OTP() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");

    if (localStorage.getItem("user-info")) {
        window.location.display = "none";
        window.location.href = "*";
        <Errorpage />
    }

    function verify() {
        let item = { otp };
        fetch("http://localhost:8000/api/verify/" + otp, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(item),
        }).then((result) => {
            result.json().then((resp) => {
                console.log("resp", resp);
                if (resp.error === "OTP not match") {
                    alert("User not verified");
                } else {
                    localStorage.clear();
                    navigate("/login");
                }
            });
        });
    }

    return (
        <>
        <div className="d-flex" style={{marginTop:"50px", justifyContent:"center",textAlign:"center"}}>
            <h1>OTP Verification</h1>
        </div>
        <div className="d-flex" style={{marginTop:"10px",justifyContent:"center",textAlign:"center"}}>
            <h5>Enter 4 digit OTP sent to your phone to verify your account!</h5>
        </div>
        <div className="d-flex" style={{marginTop:"50px",justifyContent:"center"}}>
            <MDBInput label="Enter OTP" style={{textAlign:"center"}} type="text" onChange={(e) => setOtp(e.target.value)}></MDBInput>
        </div>
        <div className="d-flex" style={{marginTop:"20px",justifyContent:"center"}}>
            <MDBBtn rounded color="success" type="button" onClick={verify}>Verify</MDBBtn>
        </div>
        </>
    )
}

export default OTP;