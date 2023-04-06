import { motion } from "framer-motion";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateProduct() {
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
    fetch("http://localhost:8000/api/deleteProduct/" + data.id+"?_method=DELETE", {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Product has been deleted");
        ApiHandler();
        navigate("/user");
      });
    });
  }

    function updateProduct() {
    const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("category", category);
    formData.append("userid", userid);
    fetch("http://localhost:8000/api/updateProduct/" + data.id +"?_method=PUT", {
        method: "POST",
        body: formData,
        }).then((result) => {
        result.json().then((resp) => {
            console.warn(resp);
        });
    }) ;
    alert("Product Updated Successfully");
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
                width: "600px",
                height: "500px",
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
                              <div className="btn btn-success"
                                color="success"
                                onClick={updateProduct}
                              >
                                Update
                              </div>
                              <div
                                className="btn btn-danger"
                                onClick={deleteProduct}
                              >
                                <MDBIcon fas icon="trash" />
                              </div>
                            </div>
                          </div>
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
    </motion.div>
  );
}

export default UpdateProduct;
