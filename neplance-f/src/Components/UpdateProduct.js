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
import { useNotification } from "use-toast-notification";

function UpdateProduct() {
  const notification = useNotification();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [basicModal2, setBasicModal2] = useState(false);
  const toggleShow2 = () => setBasicModal2(!basicModal2);
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
  const userid = JSON.parse(localStorage.getItem("user-info")).user.id;

  const ApiHandler = async () => {
    const result = await fetch(
      "http://localhost:8000/api/getSingleProduct/" + id
    );
    const resp = await result.json();
    if (resp.userid != userid) {
      navigate("*");
    }
    setData(resp);
    setName(resp.name);
    setPrice(resp.price);
    setDescription(resp.description);
    setFile(resp.file_path);
    setCategory(resp.category);
  };

  useEffect(() => {
    ApiHandler();
  }, []);

  function deleteProduct() {
    fetch(
      "http://localhost:8000/api/deleteProduct/" + data.id + "?_method=DELETE",
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
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("category", category);
    formData.append("userid", userid);
    fetch(
      "http://localhost:8000/api/updateProduct/" + data.id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    ).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        notification.show({
          message: `Service has been updated.`,
          title: "Service Updated",
          variant: "success",
        });
        ApiHandler();
      });
    });
    toggleShow();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        marginTop: "100px",
      }}
    >
      <div className="container-fluid ps-md-0 ">
        <p
          style={{ cursor: "pointer", marginTop: "50px", marginLeft: "100px" }}
          onClick={() => navigate(-1)}
        >
          <MDBIcon fas icon="angle-left" /> Back
        </p>
        <div className="row g-0">
          <div
            className="d-md-flex col-md-4 col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid #e0e0e0",
              paddingRight: "50px",
            }}
          >
            <img
              src={"http://localhost:8000/" + data.file_path}
              alt="addproduct"
              className="img-fluid"
              style={{
                width: "500px",
                height: "500px",
                marginLeft: "100px",
                marginTop: "20px",
              }}
            />
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-9 col-lg-8 mx-auto d-flex flex-column justify-content-center align-items-centers"
                    style={{
                      height: "500px",
                    }}
                  >
                    <h3 className="login-heading mb-4">Update Product</h3>
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
                            placeholder={data.price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                          <br></br>

                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder={data.description}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                            <br></br>

                            <div className="mb-3">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => setCategory(e.target.value)}
                              >
                                <option defaultValue>{data.category} </option>
                                <option value="account-finance">
                                  Accounting & Finance
                                </option>
                                <option value="administrative">
                                  Administrative
                                </option>
                                <option value="computer-it">
                                  Computer & IT
                                </option>
                                <option value="customerservice">
                                  Customer Service
                                </option>
                                <option value="design-editing">
                                  Design & Editing
                                </option>
                                <option value="education-training">
                                  Education & Training
                                </option>
                                <option value="hr-recruit">
                                  HR & Recruiting
                                </option>
                                <option value="medical-health">
                                  Medical & Health
                                </option>
                                <option value="writing">Writing</option>
                              </select>
                              <br></br>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="formFileMultiple"
                                className="form-label"
                              >
                                Choose Product Images
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
                              onClick={deleteProduct}
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

export default UpdateProduct;
