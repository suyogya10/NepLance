import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { useState } from "react";
import Errorpage from "./Errorpage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useNotification } from "use-toast-notification";

function BecomeSeller() {
  const notification = useNotification();
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getUser/" + userid);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  if (data.registered_as == "seller") {
    window.location.display = "none";
    window.location.href = "user";
    // <Errorpage />;
  }

  const [designation, setDesignation] = useState("");
  const [bio, setBio] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [cv, setCv] = useState("");
  const [file_path, setFile_path] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupation_since, setOccupation_since] = useState("");
  const [degree, setDegree] = useState("");
  const [proof, setProof] = useState("");
  const [graduation_date, setGraduation_date] = useState("");
  const [ctzn, setCtzn] = useState("");

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  function BecomeSeller() {
    let formData = new FormData();
    formData.append("designation", designation);
    formData.append("bio", bio);
    formData.append("contact_email", contact_email);
    formData.append("cv", cv);
    formData.append("file_path", file_path);
    formData.append("occupation", occupation);
    formData.append("occupation_since", occupation_since);
    formData.append("degree", degree);
    formData.append("proof", proof);
    formData.append("graduation_date", graduation_date);
    formData.append("ctzn", ctzn);
    formData.append("userid", userid);
    fetch("http://localhost:8000/api/becomeSeller/" + userid + "?_method=PUT", {
      method: "POST",
      body: formData,
    })
      .then((result) => {
        result.json().then((resp) => {
          notification.show({
            message: `Your Application has been submitted. You will be notified once your application is approved.`,
            title: "Application Submitted",
            variant: "success",
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol lg="9" className="my-5">
              <h1 class="mb-4">Become a Freelancer</h1>
              <MDBCard>
                <MDBCardBody className="px-4">
                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Your Current Designation</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="example: Software Engineer"
                        size="lg"
                        id="form1"
                        type="text"
                        onChange={(e) => {
                          setDesignation(e.target.value);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Upload Profile Picture</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBFile
                        size="lg"
                        id="customFile"
                        onChange={(e) => setFile_path(e.target.files[0])}
                      />
                      <div className="small text-muted mt-2">
                        Upload your profile picture. Max file size 50 MB
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Contact Email</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="example@example.com"
                        size="lg"
                        id="form2"
                        type="email"
                        onChange={(e) => {
                          setContact_email(e.target.value);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Bio</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBTextArea
                        label="Add Bio"
                        id="textAreaExample"
                        placeholder="Write something here..."
                        rows={3}
                        onChange={(e) => {
                          setBio(e.target.value);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Upload CV</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBFile
                        size="lg"
                        id="customFile"
                        onChange={(e) => setCv(e.target.files[0])}
                      />
                      <div className="small text-muted mt-2">
                        Upload your CV/Resume or any other relevant file. Max
                        file size 50 MB
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Your Occupation</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setOccupation(e.target.value);
                        }}
                      >
                        <option selected>Select</option>
                        <option value="account-finance">
                          Accounting & Finance
                        </option>
                        <option value="administrative">Administrative</option>
                        <option value="computer-it">Computer & IT</option>
                        <option value="customerservice">
                          Customer Service
                        </option>
                        <option value="design-editing">Design & Editing</option>
                        <option value="education-training">
                          Education & Training
                        </option>
                        <option value="hr-recruit">HR & Recruiting</option>
                        <option value="medical-health">Medical & Health</option>
                        <option value="writing">Writing</option>
                      </select>
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">In Occupation Since</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="Pick a date"
                        size="lg"
                        id="form1"
                        type="date"
                        onChange={(e) => {
                          setOccupation_since(e.target.value);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Highest Education Degree</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="Education Degree"
                        size="lg"
                        id="form1"
                        type="text"
                        onChange={(e) => {
                          setDegree(e.target.value);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Graducation Date</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="Pick a date"
                        size="lg"
                        id="form1"
                        type="date"
                        onChange={(e) => {
                          setGraduation_date(e.target.value);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Proof of Degree</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBFile
                        size="lg"
                        id="customFile"
                        onChange={(e) => setProof(e.target.files[0])}
                      />
                      <div className="small text-muted mt-2">
                        Upload your proof of degree or any other relevant file.
                        Max file size 50 MB
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Citizenship</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBFile
                        size="lg"
                        id="customFile"
                        onChange={(e) => setCtzn(e.target.files[0])}
                      />
                      <div className="small text-muted mt-2">
                        Upload your Citizenship. Max file size 50 MB
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />
                  {designation === "" ||
                  file_path === "" ||
                  cv === "" ||
                  occupation === "" ||
                  occupation_since === "" ||
                  degree === "" ||
                  graduation_date === "" ||
                  proof === "" ||
                  ctzn === "" ? (
                    <MDBBtn
                      rounded
                      type="button"
                      color="success"
                      className="my-4"
                      size="lg"
                      disabled
                    >
                      Submit Application
                    </MDBBtn>
                  ) : (
                    <MDBBtn
                      rounded
                      type="button"
                      color="success"
                      className="my-4"
                      size="lg"
                      onClick={toggleShow}
                    >
                      Submit Application
                    </MDBBtn>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </motion.div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Submit Application?</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Are you sure you want to submit your application? You will not
                be able to edit your application once submitted unless you fill
                out the application again.
              </p>
              <p>
                You will be notified and be able to start selling your services
                once your application is approved.
              </p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn
                color="success"
                onClick={() => {
                  BecomeSeller();
                  navigate("/userinterest");
                }}
              >
                Submit
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default BecomeSeller;
