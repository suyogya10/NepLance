import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon
} from "mdb-react-ui-kit";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UserProfile() {
  var id = 1;
  var sum = 0;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getProducts");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    ApiHandler();
  }, []);

  function AddProduct() {
    navigate("/addproduct");
  }
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className="vh-100" style={{ backgroundColor: "#efefef" }}>
        <MDBContainer>
          <MDBRow className="justify-content-left">
            <MDBCol md="9" lg="7" xl="5" className="mt-5">
              <MDBCard
                style={{
                  borderRadius: "15px",
                  width: "1300px",
                  height: "600px",
                }}
              >
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: "200px", borderRadius: "10px" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder image"
                        fluid
                      />
                      <div>
                        <br></br>
                        <MDBCardTitle>Danny McLoan</MDBCardTitle>
                        <MDBCardText>Senior Journalist</MDBCardText>

                        <div
                          className="d-flex justify-content-left rounded-3 p-2 mb-2"
                          style={{ backgroundColor: "#efefef", width: "200px" }}
                        >
                          <div>
                            <p className="small text-muted mb-1">Products</p>
                            <p className="mb-0">41</p>
                          </div>
                          <div className="px-3">
                            <p className="small text-muted mb-1">Followers</p>
                            <p className="mb-0">976</p>
                          </div>
                          <div>
                            <p className="small text-muted mb-1">Rating</p>
                            <p className="mb-0">8.5</p>
                          </div>
                        </div>
                        <div>
                          <MDBBtn
                             rounded className="profilebtn " color="primary" size="sm"
                            onClick={AddProduct}
                          >
                            Add Product
                          </MDBBtn>
                        </div>

                        <div>
                          <MDBBtn rounded className="profilebtn " color="secondary" size="sm">
                            Edit Profile
                          </MDBBtn>
                        </div>

                        <div>
                          <MDBBtn
                             rounded className="profilebtn " color="danger" size="sm"
                          >
                            Delete Profile
                          </MDBBtn>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h1 className="profiletitle2">Your Products</h1>
                      <MDBTable>
                        <MDBTableHead>
                          <tr>
                            <th scope="col" className="fw-bold">S.N</th>
                            <th scope="col" className="fw-bold">Title</th>
                            <th scope="col" className="fw-bold">Description</th>
                            <th scope="col" className="fw-bold">Price</th>
                            <th scope="col" className="fw-bold">Actions</th>
                          </tr>
                        </MDBTableHead>
                        {data.slice(0,5).map((item) => (
                          <MDBTableBody>
                            <tr>
                              <td>
                                <MDBBadge color="secondary" pill>
                                  {id++
                                  }
                                </MDBBadge>
                      
                              </td>
                              <td>
                                <p className="fw-normal mb-2">{item.name}</p>
                              </td>
                              <td>
                                <p className="fw-normal mb-2">
                                  {item.description}
                                </p>
                              </td>
                              <td>Rs. {item.price}</td>
                              <td>
                              <MDBBtn
                                  outline
                                  rounded
                                  type="button"
                                  size="sm"
                                  color="primary"
                                >
                                  <MDBIcon fas icon="eye" />
                                </MDBBtn>
                                <MDBBtn
                                  rounded
                                  type="button"
                                  size="sm"
                                  className="mx-1"
                                  color="success"
                                >
                                  <MDBIcon far icon="edit" />
                                </MDBBtn>
                                <MDBBtn                                 
                                  rounded
                                  type="button"
                                  size="sm"
                                  color="danger"
                              
                                >
                                  <MDBIcon fas icon="trash" />
                                </MDBBtn>
                                
                              </td>
                            </tr>
                          </MDBTableBody>
                        ))}
                      </MDBTable>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </motion.div>
  );
}
