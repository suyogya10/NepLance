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
import { useRef } from "react";
import { motion } from "framer-motion";
import io from "socket.io-client";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const socket = io("http://localhost:3001");

export default function Chats() {
  const navigate = useNavigate();
  const [message, setMessage] = useState([]);
  const [textMessage, setTextMessage] = useState("");
  const { id: roomId } = useParams();
  const userData = roomId.split("-");
  const room = roomId.split("-").sort().join("-");
  // console.log(room);

  const ApiHandler = async () => {
    let resultReceive = await fetch(
      "http://localhost:8000/api/messages/" + userData[0] + "/" + userData[1]
    );
    resultReceive = await resultReceive.json();
    console.log(resultReceive);
    setMessage(resultReceive.messages);
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  const [recipentData, setRecipentData] = useState([]);
  const ApiHandler2 = async () => {
    let result4 = await fetch(
      "http://localhost:8000/api/chat/recipients/" + userData[0]
    );
    result4 = await result4.json();
    setRecipentData(result4.recipients.reverse());
  };
  useEffect(() => {
    ApiHandler2();
  }, []);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    messagesEndRef.current.scrollTo(0, messagesEndRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    socket.emit("chat-room", room);
    socket.on("receive-message", (msg, room) => {
      // console.log("received message: " + room);
      console.log(msg);

      setMessage((prev) => [...prev, msg]);
    });
    return () => {
      socket.off("receive-message");
    };
  }, [message]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit(
      "chat-message",
      {
        username: JSON.parse(localStorage.getItem("user-info")).user.name,
        message: textMessage,
        sender_id: userData[0],
        receiver_id: userData[1],
      },
      room,
      (msg) => {
        console.log(msg);
        let formData = new FormData();
        formData.append("sender_id", msg.sender_id);
        formData.append("message", msg.message);
        fetch(
          "http://localhost:8000/api/chat/" + msg.receiver_id + "/message",
          {
            method: "POST",
            body: formData,
          }
        ).then((result) => {
          result.json().then((resp) => {
            console.warn(resp);
            console.log(result);
          });
        });
      }
    );
    setTextMessage("");

    // const sender_id = userData[1];
    // const receiver_id = userData[0];
    // const message = textMessage;
  };

  const [recipentName, setRecipentName] = useState("");
  const ApiHandler3 = async () => {
    let result5 = await fetch(
      "http://localhost:8000/api/getUser/" + userData[1]
    );
    result5 = await result5.json();
    setRecipentName(result5);
  };
  useEffect(() => {
    ApiHandler3();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MDBContainer fluid className="py-1">
          <MDBRow>
            <MDBCol md="12">
              <MDBCard id="chat3" style={{ borderRadius: "15px" }}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                      <div className="p-3">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h2 className="mb-0">Inbox</h2>
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
                                          className="d-flex img-thumbnail rounded-circle img-fluid"
                                          width="60"
                                        />
                                      </div>
                                      <div className="pt-1 d-flex align-items-center">
                                        <p
                                          className="fw-bold mb-0"
                                          style={{ marginLeft: "5px" }}
                                        >
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

                    <MDBCol md="6" lg="7" xl="8">
                      <div className="d-flex align-items-center">
                        <img
                          src={
                            "http://localhost:8000/" + recipentName.file_path
                          }
                          alt="avatar"
                          className="d-flex mb-2 align-self-center me-3 img-thumbnail rounded-circle img-fluid"
                          width="60"
                        />
                        <h3>{recipentName.name}</h3>
                      </div>
                      <div
                        className="p-3 baulsdeep"
                        ref={messagesEndRef}
                        style={{
                          minHeight: "550px",
                          maxHeight: "550px",
                          overflow: "auto",
                          borderLeft: "1px solid #e0e0e0",
                          borderTop: "1px solid #e0e0e0",
                        }}
                      >
                        {message.map((msg) => {
                          return msg.sender_id.toString() === userData[1] ? (
                            <div>
                              <div className="d-flex flex-row justify-content-start">
                                <div>
                                  <p
                                    className="small p-2 ms-3 mb-1 rounded-3"
                                    style={{ backgroundColor: "#f5f6f7" }}
                                  >
                                    {msg.message}
                                  </p>
                                  <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                                    {/* {msg.created_at
                                      ? msg.created_at
                                          .split("T")[1]
                                          .split(".")[0]
                                          .split(":")[0] +
                                        ":" +
                                        msg.created_at
                                          .split("T")[1]
                                          .split(".")[0]
                                          .split(":")[1]
                                      : "000"} */}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="d-flex flex-row justify-content-end">
                              <div>
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-success">
                                  {msg.message}
                                </p>
                                <p className="small me-3 mb-3 rounded-3 text-muted">
                                  {/* {msg.created_at
                                    ? msg.created_at
                                        .split("T")[1]
                                        .split(".")[0]
                                        .split(":")[0] +
                                      ":" +
                                      msg.created_at
                                        .split("T")[1]
                                        .split(".")[0]
                                        .split(":")[1]
                                    : "000"} */}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <form
                          style={{
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            gap: "20px",
                          }}
                          onSubmit={(e) => sendMessage(e)}
                        >
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
                            value={textMessage}
                            onChange={(e) => {
                              setTextMessage(e.target.value);
                            }}
                          />

                          <MDBBtn
                            color="success"
                            style={{
                              height: "45px",
                            }}
                            type="submit"
                          >
                            <MDBIcon fas icon="paper-plane" />
                          </MDBBtn>
                        </form>
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
