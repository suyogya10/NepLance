import React from "react";
import about1 from "./Assets/About1.png";
import about2 from "./Assets/About2.png";
import about3 from "./Assets/About3.png";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/getFAQ");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  });
  return (
    <>
      <div>
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us</h1>
              <p className="text-muted mb-0">
                NepLance is a freelancing platform that connects businesses with
                independent professionals. We are a community of freelancers
                from all over Nepal. We are here to help you grow your business
                and achieve your goals.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src={about1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa  fa-location-arrow fa-2x mb-3 text-success"></i>
              <h2>Nepal Based</h2>
              <p className="text-muted mb-4">
                We are a platform to provide opportunities to freelancers from
                all over Nepal. With NepLance, you can find the best freelancers
                in Nepal, hire them or buy their services.
              </p>
              <p className="text-muted mb-4">
                You can also become a freelancer, sell your skills and earn by
                filling out a detailed form which will be verified by our team.
              </p>
              <a
                href="/home"
                className="btn btn-success px-5 rounded-pill shadow-sm"
              >
                Get Started
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src={about2} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img src={about3} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-dollar-sign fa-2x mb-3 text-success"></i>
              <h2 className="font-weight-light">Sajilo Payment</h2>
              <p className="font-italic text-muted mb-4">
                With the local economy in mind, we have made it easy for you to
                pay for the services you buy. You can pay through Khalti for now
                and we will be adding more payment options like eSewa, IME Pay
                and Bank Transfer in the future. Customers won't have a hard
                time purchasing services thanks to the addition of Nepali wallet
                merchants.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MDBContainer>
        <section>
          <MDBTypography
            tag="h3"
            className="text-center mb-4 pb-2 text-primary fw-bold"
          >
            FAQ
          </MDBTypography>
          <p className="text-center mb-5">
            Find the answers for the most frequently asked questions below
          </p>

          <MDBRow className="d-flex">
            {data.map((item) => (
              <MDBCol key={item.id} md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon far icon="question-circle text-primary pe-2" />
                  {item.question}
                </MDBTypography>
                {item.answer}
                <>
                  <a href={item.link}> Learn More</a>
                </>
              </MDBCol>
            ))}
          </MDBRow>
        </section>
      </MDBContainer>
    </>
  );
};

export default AboutUs;
