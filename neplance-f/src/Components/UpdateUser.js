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
  MDBInput,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateUser() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal);

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState("");

  const ApiHandler = async () => {
    const result = await fetch("http://localhost:8000/api/getUser/" + id);
    const resp = await result.json();
    setData(resp);
    setName(resp.name);
    setDesignation(resp.designation);
    setBio(resp.bio);
    setFile(resp.file_path);
  };

  useEffect(() => {
    ApiHandler();
  }, []);

  function deleteUser() {
    fetch("http://localhost:8000/api/deleteUser/" + id + "?_method=DELETE", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Product has been deleted");
        ApiHandler();
        localStorage.removeItem("user-info");
        navigate("/login");
      });
    });
  }

  function Update() {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("file_path", file);
    formData.append("bio", bio);
    formData.append("userid", id);
    fetch("http://localhost:8000/api/updateUser/" + id + "?_method=PUT", {
      method: "POST",
      body: formData,
    }).then((result) => {
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
      <div className="container">
        <div className="row">
          <div className="d-none d-md-flex col-md-4 col-lg-6">
            <img
              src={"http://localhost:8000/" + data.file_path}
              alt="addproduct"
              className="img-fluid"
              style={{
                width: "400px",
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
                  <div>
                    <form id="addprod">
                      <h3 className="login-heading mb-4">Update Profile</h3>
                      <div className="mb-3">
                        <MDBInput
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          label="Name"
                          placeholder={data.name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <br></br>

                        <div className="mb-3">
                          <MDBInput
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            label="Designation"
                            placeholder={data.designation}
                            onChange={(e) => setDesignation(e.target.value)}
                          />
                          <br></br>

                          <div className="mb-3">
                            <textarea
                              className="form-control"
                              id="floatingInput"
                              label="Bio"
                              placeholder={data.bio}
                              onChange={(e) => setBio(e.target.value)}
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
                            <MDBModalTitle>Update Profile?</MDBModalTitle>
                            <MDBBtn
                              className="btn-close"
                              color="none"
                              onClick={toggleShow}
                              type="button"
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            Are you sure you want to update this profile ?
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
                              Update Profile
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
                            <MDBModalTitle>Delete Profile?</MDBModalTitle>
                            <MDBBtn
                              className="btn-close"
                              color="none"
                              onClick={toggleShow2}
                              type="button"
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            Are you sure you want to delete this Profile ?
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
                              Delete Profile
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
