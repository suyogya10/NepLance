import { useState } from "react";
import { motion } from "framer-motion";

function AddProduct() {
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
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div class="container-fluid ps-md-0">
        <div class="row g-0">
          <div class="d-none d-md-flex col-md-4 col-lg-6 addproduct"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">Add Product</h3>
                    <form id="addprod">
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Product Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <br></br>

                        <div class="mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Product Price (in Rs.)"
                            onChange={(e) => setPrice(e.target.value)}
                          />
                          <br></br>

                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInput"
                              placeholder="Product Description"
                              onChange={(e) => setDescription(e.target.value)}
                            />
                            <br></br>

                            <div class="mb-3">
                              <select
                                class="form-select"
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

                            <div class="mb-3">
                              <label for="formFileMultiple" class="form-label">
                                Choose Product Images
                              </label>
                              <input
                                class="form-control"
                                type="file"
                                id="formFileMultiple"
                                multiple
                                onChange={(e) => setFile(e.target.files[0])}
                              ></input>
                            </div>
                            <div class="d-grid">
                              <button
                                class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                type="submit"
                                onClick={addProduct} // onClick is used to call the function
                              >
                                Add Product
                              </button>
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
