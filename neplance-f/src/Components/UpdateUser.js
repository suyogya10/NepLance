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
import { useNotification } from "use-toast-notification";

function UpdateUser() {
  const notification = useNotification();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal2);

  const [basicModal3, setBasicModal3] = useState(false);
  const toggleShow3 = () => setBasicModal3(!basicModal3);

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
        ApiHandler();
        notification.show({
          message: `Your Profile has been Updated`,
          title: "Profile Updated",
          variant: "success",
        });
      });
    });
    toggleShow();
  }

  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");

  function UpdatePassword() {
    let formData = new FormData();
    formData.append("oldpassword", oldpassword);
    formData.append("newpassword", newpassword);
    fetch("http://localhost:8000/api/updatePassword/" + id + "?_method=PUT", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        console.log(resp);
        if (resp.result === "Password has been changed") {
          notification.show({
            message: `Your Password has been Updated`,
            title: "Password Updated",
            variant: "success",
          });
        } else {
          notification.show({
            message: `Your Old Password is Incorrect`,
            title: "Password Not Updated",
            variant: "error",
          });
        }
      });
    });
    toggleShow3();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="card d-flex align-items-center">
            <img
              src={"http://localhost:8000/" + data.file_path}
              alt="addproduct"
              className="mt-4 mb-2 img-thumbnail rounded-circle img-fluid"
              style={{
                width: "300px",
                height: "300px",
              }}
            />
          </div>
          <div className="col">
            <div className="d-flex py-5 ">
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    <form id="addprod">
                      <h3 className="mb-4">Update Profile</h3>

                      <div className="mb-3">
                        <MDBInput
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          label="Name"
                          placeholder={data.name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
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

                        <div>
                          <textarea
                            className="form-control"
                            id="floatingInput"
                            label="Bio"
                            placeholder={data.bio}
                            onChange={(e) => setBio(e.target.value)}
                          />
                        </div>
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
                            onChange={(e) => setFile(e.target.files[0])}
                          ></input>
                        </div>
                        <div className="d-flex gap-3">
                          <MDBBtn
                            className="btn btn-success"
                            onClick={toggleShow}
                            type="button"
                            rounded
                          >
                            Update
                          </MDBBtn>
                          <MDBBtn
                            className="btn btn-danger"
                            onClick={toggleShow2}
                            type="button"
                            rounded
                          >
                            <MDBIcon fas icon="trash-alt" />
                          </MDBBtn>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex">
          <div className="container">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <form id="addprod">
                    <h3 className="mb-4">Change Password</h3>
                    <div className="mb-3">
                      <MDBInput
                        type="password"
                        className="form-control mb-3"
                        id="floatingInput"
                        label="Current Password"
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <MDBInput
                        type="password"
                        className="form-control mb-3"
                        id="floatingInput"
                        label="New Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-flex gap-3">
                      <MDBBtn
                        className="btn btn-success"
                        onClick={toggleShow3}
                        type="button"
                        rounded
                      >
                        Update
                      </MDBBtn>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
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
              <MDBBtn color="secondary" onClick={toggleShow} type="button">
                Close
              </MDBBtn>
              <MDBBtn color="success" type="submit" onClick={Update}>
                Update Profile
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal show={basicModal2} setShow={setBasicModal2} tabIndex="-1">
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
              <MDBBtn color="secondary" onClick={toggleShow2} type="button">
                Close
              </MDBBtn>
              <MDBBtn color="danger" type="submit" onClick={deleteUser}>
                Delete Profile
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal show={basicModal3} setShow={setBasicModal3} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Change Password?</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow2}
                type="button"
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Are you sure you want to change your Password? ?
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow3} type="button">
                Close
              </MDBBtn>
              <MDBBtn color="success" type="submit" onClick={UpdatePassword}>
                Change Password
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </motion.div>
  );
}

export default UpdateUser;
