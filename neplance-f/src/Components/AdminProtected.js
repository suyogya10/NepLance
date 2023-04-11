import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminProtected(props) {
  let Cmp = props.Cmp;
   // Cmp is the component which is passed as props
  const navigate = useNavigate(); // useNavigate is used to redirect to another page
  useEffect(() => {
    if (!localStorage.getItem("admin-info")) {
      // if user is not logged in then redirect to home page
      navigate("/adminlogin");
    }
   
  }, [navigate]);

  return (
    <>
      <Cmp />
    </>
  );
}

export default AdminProtected;
