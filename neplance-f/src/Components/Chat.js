import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";

export default function Chat() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MDBContainer fluid className="py-3">
          <MDBRow>
            <MDBCol md="12">
              <MDBCard id="chat3" style={{ borderRadius: "15px" }}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                      <div className="p-3">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h2 className="mb-0">Messages</h2>
                        </div>
                        <MDBInputGroup className="rounded mb-3">
                          <input
                            className="form-control rounded"
                            placeholder="Search"
                            type="search"
                          />
                          <span
                            className="input-group-text border-0"
                            id="search-addon"
                          >
                            <MDBIcon fas icon="search" />
                          </span>
                        </MDBInputGroup>
                        <div style={{ height: "500px", overflow: "auto" }}>
                          <MDBTypography listUnStyled className="mb-0">
                            <li className="p-2 border-bottom">
                              <a
                                href="#!"
                                className="d-flex justify-content-between"
                              >
                                <div className="d-flex flex-row">
                                  <div>
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                      alt="avatar"
                                      className="d-flex align-self-center me-3"
                                      width="60"
                                    />
                                  </div>
                                  <div className="pt-1">
                                    <p className="fw-bold mb-0">
                                      Marie Horwitz
                                    </p>
                                    <p className="small text-muted">
                                      Hello, Are you there?
                                    </p>
                                  </div>
                                </div>
                                <div className="pt-1">
                                  <p className="small text-muted mb-1">
                                    Just now
                                  </p>
                                  <span className="badge bg-danger rounded-pill float-end">
                                    3
                                  </span>
                                </div>
                              </a>
                            </li>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" lg="7" xl="8">
                      <div style={{ maxHeight: "500px", overflow: "auto" }}>
                        <div className="d-flex flex-row justify-content-start">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                          <div>
                            <p
                              className="small p-2 ms-3 mb-1 rounded-3"
                              style={{ backgroundColor: "#f5f6f7" }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                              12:00 PM | Aug 13
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                          <div>
                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-success">
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat.
                            </p>
                            <p className="small me-3 mb-3 rounded-3 text-muted">
                              12:00 PM | Aug 13
                            </p>
                          </div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar 1"
                            style={{ width: "45px", height: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 3"
                          style={{ width: "40px", height: "100%" }}
                        />
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput2"
                          placeholder="Type message"
                        />
                        <a className="ms-1 text-muted" href="#!">
                          <MDBIcon fas icon="paperclip" />
                        </a>
                        <a className="ms-3 text-muted" href="#!">
                          <MDBIcon fas icon="smile" />
                        </a>
                        <a className="ms-3" href="#!">
                          <MDBIcon color="success" fas icon="paper-plane" />
                        </a>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </motion.div>
    </>
  );
}
