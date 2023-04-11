import { motion } from "framer-motion";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateUser() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal);


  const {id} = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [file, setFile] = useState("");

  const ApiHandler = async () => {
    const result = await fetch(
      "http://localhost:8000/api/getUser/" + id
    );
    const resp = await result.json();
    setData(resp);
    setName(resp.name);
    setDesignation(resp.designation);
    setFile(resp.file_path);
  };

  useEffect(() => {
    ApiHandler();
  }, []);

  function deleteUser() {
    fetch(
      "http://localhost:8000/api/deleteUser/" + id + "?_method=DELETE",
      {
        method: "DELETE",
      }
    ).then((result) => {
      result.json().then((resp) => {
        alert("Product has been deleted");
        ApiHandler();
        navigate("/user");
      });
    });
  }

  function Update() {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("file_path", file);
    formData.append("userid", id);
    fetch(
      "http://localhost:8000/api/updateUser/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    ).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    alert("User Updated Successfully");
    toggleShow();
    window.location.reload(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6">
            
            <img
              src={"http://localhost:8000/" + data.file_path}
              alt="addproduct"
              className="img-fluid"
              style={{
                width: "500px",
                height: "400px",
                marginLeft: "100px",
                marginTop: "100px",
              }}
            />
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Update Profile</h3>
                    <form id="addprod">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder={data.name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <br></br>

                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={data.designation}
                            onChange={(e) => setDesignation(e.target.value)}
                          />
                          <br></br>

                            <div className="mb-3">
                              <label
                                htmlFor="formFileMultiple"
                                className="form-label"
                              >
                                Choose New Profile Picture
                              </label>
                              <input
                                className="form-control"
                                type="file"
                                id="formFileMultiple"
                                multiple
                                onChange={(e) => setFile(e.target.files[0])}
                              ></input>
                            </div>
                            <div className="d-flex gap-3">
                              <div
                                className="btn btn-success"
                                color="success"
                                onClick={toggleShow}
                              >
                                Update
                              </div>
                              <div
                                className="btn btn-danger"
                                onClick={toggleShow2}
                              >
                                <MDBIcon fas icon="trash" />
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </form>
                    <MDBModal
                      show={basicModal}
                      setShow={setBasicModal}
                      tabIndex="-1"
                    >
                      <MDBModalDialog>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Update Service?</MDBModalTitle>
                            <MDBBtn
                              className="btn-close"
                              color="none"
                              onClick={toggleShow}
                              type="button"
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            Are you sure you want to update this service ?
                          </MDBModalBody>

                          <MDBModalFooter>
                            <MDBBtn
                              color="secondary"
                              onClick={toggleShow}
                              type="button"
                            >
                              Close
                            </MDBBtn>
                            <MDBBtn
                              color="success"
                              type="submit"
                              onClick={Update}
                            >
                              Update Service
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>

                    <MDBModal
                      show={basicModal2}
                      setShow={setBasicModal2}
                      tabIndex="-1"
                    >
                      <MDBModalDialog>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Delete Service?</MDBModalTitle>
                            <MDBBtn
                              className="btn-close"
                              color="none"
                              onClick={toggleShow2}
                              type="button"
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            Are you sure you want to delete this service ?
                          </MDBModalBody>

                          <MDBModalFooter>
                            <MDBBtn
                              color="secondary"
                              onClick={toggleShow2}
                              type="button"
                            >
                              Close
                            </MDBBtn>
                            <MDBBtn
                              color="danger"
                              type="submit"
                              onClick={deleteUser}
                            >
                              Delete Service
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default UpdateUser;
