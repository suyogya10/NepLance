import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBInputGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import io from "socket.io-client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  const [recipentData, setRecipentData] = useState([]);
  const ApiHandler2 = async () => {
    let result4 = await fetch(
      "http://localhost:8000/api/chat/recipients/" +
        JSON.parse(localStorage.getItem("user-info")).user.id
    );
    result4 = await result4.json();
    console.log(result4.recipients);
    setRecipentData(result4.recipients.reverse());
  };
  useEffect(() => {
    ApiHandler2();
  }, []);

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
                            {recipentData.map((item) => {
                              return (
                                <li
                                  className="p-2 border-bottom"
                                  onClick={() => {
                                    console.log("balls");
                                    const roomId =
                                      JSON.parse(
                                        localStorage.getItem("user-info")
                                      ).user.id +
                                      "-" +
                                      item.id;
                                    navigate("/chats/" + roomId);
                                  }}
                                >
                                  <a
                                    style={{ cursor: "pointer" }}
                                    className="d-flex justify-content-between"
                                  >
                                    <div className="d-flex flex-row">
                                      <div>
                                        <img
                                          src={
                                            "http://localhost:8000/" +
                                            item.file_path
                                          }
                                          alt="avatar"
                                          className="d-flex align-self-center me-3"
                                          width="60"
                                        />
                                      </div>
                                      <div className="pt-1 d-flex align-items-center">
                                        <p className="fw-bold mb-0">
                                          {item.name}
                                        </p>
                                        {/* <p className="small text-muted">
                                          Hello, Are you there?
                                        </p> */}
                                      </div>
                                    </div>
                                    {/* <div className="pt-1">
                                      <p className="small text-muted mb-1">
                                        Just now
                                      </p>
                                    </div> */}
                                  </a>
                                </li>
                              );
                            })}
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      className="text-center d-flex flex-column justify-content-center"
                    >
                      <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                        NepLance
                        <br />
                        <span className="text-success">Chat Room</span>
                      </h1>

                      <p
                        className="px-3"
                        style={{ color: "hsl(217, 10%, 50.8%)" }}
                      >
                        Your messages apper here when you start a conversation
                        with someone. Click on a contact to continue the chat
                        with them.
                      </p>
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
