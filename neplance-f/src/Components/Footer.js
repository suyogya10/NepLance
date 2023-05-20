import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1", marginTop: "100px" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.facebook.com/suyogya.gautam"
            role="button"
          >
            <MDBIcon
              fab
              className="fab fa-facebook-f"
              style={{
                fontSize: "1.5rem",
              }}
            />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://twitter.com/suyogyagg"
            role="button"
          >
            <MDBIcon
              fab
              className="fa-twitter"
              style={{
                fontSize: "1.5rem",
              }}
            />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.instagram.com/suyogyag/"
            role="button"
          >
            <MDBIcon
              fab
              className="fa-instagram"
              style={{
                fontSize: "1.5rem",
              }}
            />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.linkedin.com/in/suyogya-gautam-3882b1212"
            role="button"
          >
            <MDBIcon
              fab
              className="fa-linkedin"
              style={{
                fontSize: "1.5rem",
              }}
            />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://github.com/suyogya10/NepLance"
            role="button"
          >
            <MDBIcon
              fab
              className="fa-github"
              style={{
                fontSize: "1.5rem",
              }}
            />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center text-dark p-3">
        © 2023 Copyright:
        <a className="text-dark" href="/home">
          <a> </a>NepLance
        </a>
      </div>
    </MDBFooter>
  );
}
