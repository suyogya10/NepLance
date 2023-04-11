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

function AdminUpdateProduct() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");

  const ApiHandler = async () => {
    const result = await fetch(
      "http://localhost:8000/api/getSingleProduct/" + id
    );
    const resp = await result.json();
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
    const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
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
        alert("Product Updated Successfully");
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
      style={
        {
            width: "100%"
        }
      }
    >
      <div className="d-flex w-100 justify-content-between align-items-center mt-5">
        <div className="d-flex w-50 flex-column">
        <img
              src={"http://localhost:8000/" + data.file_path}
              alt="addproduct"
              className="img-fluid"
              style={{
                height: "500px",
              }}
            />
        </div>
        <div className="d-flex w-50 flex-column p-5">
       
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
                  </div>
                </div>
       
    
    </motion.div>
  );
}

export default AdminUpdateProduct;
