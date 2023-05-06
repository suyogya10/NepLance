import React from "react";
import { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCarousel,
  MDBCarouselItem,
  MDBInput,
} from "mdb-react-ui-kit";
import img from "./Assets/banner2.png";
import img2 from "./Assets/banner3.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Cara() {
  const navigate = useNavigate();

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  function AddRequest() {
    let userid = JSON.parse(localStorage.getItem("user-info")).user.id;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("delivery_date", date);
    fetch("http://localhost:8000/api/addRequest/" + userid, {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        toggleShow();
      });
    });
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="cara"
      >
        <MDBCarousel>
          {localStorage.getItem("user-info") ? ( // if user is logged in}
            <MDBCarouselItem className="d-block " itemId={1} src={img2}>
              <h5>Start Earning Today</h5>
              <p>Post your skills, sell them and earn money!</p>
              <MDBBtn
                rounded
                color="light"
                rippleColor="dark"
                onClick={toggleShow}
              >
                Post a request
              </MDBBtn>
            </MDBCarouselItem>
          ) : (
            <MDBCarouselItem className="d-block " itemId={1} src={img}>
              <h5>Join us Today!</h5>
              <p>
                Find the best freelancers in Nepal or sell your skills and earn!
              </p>
              <MDBBtn
                rounded
                color="light"
                rippleColor="dark"
                onClick={() => navigate("/register")}
              >
                Register Now
              </MDBBtn>
            </MDBCarouselItem>
          )}
        </MDBCarousel>
      </motion.div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Post a request</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                <h5>
                  <strong>How it works?</strong>
                </h5>
                <p>
                  We will help you match with the best freelancers in Nepal.
                  <p></p>List what you need for your project or business.
                  <p></p> Place your price and wait for the best freelancers to
                  contact you.
                </p>
              </div>
              <div>
                <MDBInput
                  label="Job Title"
                  id="form1"
                  type="text"
                  className="form-control mb-3"
                  onChange={(e) => setName(e.target.value)}
                />
                <textarea
                  className="form-control mb-3"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <MDBInput
                  label="Price in Rs."
                  id="form1"
                  type="text"
                  className="form-control mb-3"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <select
                  className="form-select mb-4"
                  aria-label="Default select example"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option selected>Select Category</option>
                  <option value="account-finance">Accounting & Finance</option>
                  <option value="administrative">Administrative</option>
                  <option value="computer-it">Computer & IT</option>
                  <option value="customerservice">Customer Service</option>
                  <option value="design-editing">Design & Editing</option>
                  <option value="education-training">
                    Education & Training
                  </option>
                  <option value="hr-recruit">HR & Recruiting</option>
                  <option value="medical-health">Medical & Health</option>
                  <option value="writing">Writing</option>
                </select>
                <MDBInput
                  label="Expected Delivery Date"
                  id="form1"
                  type="date"
                  className="form-control mb-3"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn color="success" onClick={AddRequest}>
                Post Request
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Cara;
