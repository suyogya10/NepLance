import React from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBTypography,
  MDBContainer,
  MDBModalFooter,
  MDBModalTitle,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminFAQ() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [deleteID, setdeleteID] = useState("");
  const [deleteflag, setDeleteflag] = useState(false);

  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal2);

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  var sn = 1;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/getFAQ");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, [deleteflag]);

  function AdminDeleteReview(key) {
    fetch("http://localhost:8000/api/deleteFAQ/" + key + "?_method=DELETE", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        setDeleteflag(true);
      });
    });
  }

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [link, setLink] = useState("");

  function addFAQ() {
    let formdata = new FormData();
    formdata.append("question", question);
    formdata.append("answer", answer);
    formdata.append("link", link);
    fetch("http://localhost:8000/api/addFAQ/", {
      method: "POST",
      body: formdata,
    }).then((result) => {
      result.json().then((resp) => {
        toggleShow2();
        setDeleteflag(true);
      });
    });
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <MDBContainer className="mt-5 d-flex">
          <MDBTypography tag="h2" variant="h2">
            Frequently Asked Questions
            <MDBBtn
              color="success"
              rounded
              size="sm"
              style={{ marginLeft: "10px" }}
              onClick={toggleShow2}
            >
              <MDBIcon fas icon="plus" />
              Add FAQ
            </MDBBtn>
          </MDBTypography>
        </MDBContainer>

        <MDBTable align="middle">
          <MDBTableHead>
            <tr style={{ textAlign: "center" }}>
              <th scope="col">SN</th>
              <th scope="col">Question</th>
              <th scope="col">Answer</th>

              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          {data.map((item) => (
            <MDBTableBody key={item.id}>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{sn++}</p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "center" }}>
                  <p className="fw-normal mb-1">{item.question}</p>
                </td>
                <td style={{ textAlign: "center" }}>
                  <p className="fw-normal mb-1">{item.answer}</p>
                </td>
                <td>
                  <MDBBtn
                    color="danger"
                    rounded
                    size="sm"
                    onClick={() => {
                      setdeleteID(item.id);
                      toggleShow();
                    }}
                  >
                    <MDBIcon fas icon="trash" />
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent style={{ textAlign: "center" }}>
              <MDBModalHeader>
                <MDBTypography tag="h5" variant="h5">
                  Delete Review
                </MDBTypography>
                <MDBBtn color="none" onClick={toggleShow} type="button">
                  <MDBIcon icon="times" fas />
                </MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p>Are you sure you want to delete this review?</p>
                <MDBBtn color="secondary" onClick={toggleShow} type="button">
                  Cancel
                </MDBBtn>
                <MDBBtn
                  color="danger"
                  onClick={() => {
                    setDeleteflag(false);
                    AdminDeleteReview(deleteID);
                    toggleShow();
                  }}
                  style={{ marginLeft: "10px" }}
                  type="button"
                >
                  Delete
                </MDBBtn>
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        <MDBModal show={basicModal2} setShow={setBasicModal2} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Add FAQ</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow2}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p>
                  Add a question, answer and a link if necessary for the FAQ
                </p>
                <div>
                  <MDBInput
                    className="form-control mt-3"
                    label="Question"
                    onChange={(e) => setQuestion(e.target.value)}
                  ></MDBInput>
                  <MDBTextArea
                    className="form-control mt-3"
                    label="Answer"
                    rows={3}
                    onChange={(e) => setAnswer(e.target.value)}
                  ></MDBTextArea>
                  <MDBInput
                    className="form-control mt-3"
                    label="Link (if necessary)"
                    onChange={(e) => setLink(e.target.value)}
                  ></MDBInput>
                </div>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleShow2}>
                  Cancel
                </MDBBtn>
                <MDBBtn
                  color="success"
                  onClick={() => {
                    setDeleteflag(false);
                    addFAQ();
                  }}
                >
                  Add FAQ
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </motion.div>
    </>
  );
}
