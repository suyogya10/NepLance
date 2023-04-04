import { useState } from "react";
import { motion } from "framer-motion";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");

  function addProduct() {
    
    const userid = JSON.parse(localStorage.getItem("user-info")).user.id;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("category", category);
    formData.append("userid", userid);
    fetch("http://localhost:8000/api/addproduct", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    document.getElementById("addprod").reset();
    alert("Product Added Successfully");
    navigate("/user");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 addproduct"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Add Product</h3>
                    <form id="addprod">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Product Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <br></br>

                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Product Price (in Rs.)"
                            onChange={(e) => setPrice(e.target.value)}
                          />
                          <br></br>

                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="Product Description"
                              onChange={(e) => setDescription(e.target.value)}
                            />
                            <br></br>

                            <div className="mb-3">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => setCategory(e.target.value)}
                              >
                                <option selected>Select</option>
                                <option value="account-finance">Accounting & Finance</option>
                                <option value="administrative">Administrative</option>
                                <option value="computer-it">Computer & IT</option>
                                <option value="customerservice">Customer Service</option>
                                <option value="design-editing">Design & Editing</option>
                                <option value="education-training">Education & Training</option>
                                <option value="hr-recruit">HR & Recruiting</option>
                                <option value="medical-health">Medical & Health</option>
                                <option value="writing">Writing</option>  
                              </select>
                              <br></br>
                            </div>

                            <div className="mb-3">
                              <label for="formFileMultiple" className="form-label">
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
                            <div className="d-grid">
                              <MDBBtn
                                rounded
                                type="submit"
                                color="success"
                                onClick={addProduct} // onClick is used to call the function
                              >
                                Add Product
                              </MDBBtn>
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

export default AddProduct;
