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

  var sn = 1;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch("http://localhost:8000/api/getProducts");
    result = await result.json();
    setData(result.reverse());
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
      <div>
        <MDBContainer>
          <MDBRow className="justify-content-left">
            <MDBCol >
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
                        {
                          localStorage.getItem("user-info") ? 
                          <MDBCardTitle>{JSON.parse(localStorage.getItem("user-info")).user.name}</MDBCardTitle>
                          :
                          null
                        }
                        {
                          localStorage.getItem("user-info") ?
                          <MDBCardText>{JSON.parse(localStorage.getItem("user-info")).user.designation}</MDBCardText>
                          :
                          null

                        }
                        

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
                            Add Service
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
                      <h3 className="profiletitle2">Your Listings</h3>
                      <MDBTable hover>
                        <MDBTableHead>
                          <tr>
                            <th scope="col" className="fw-bold">S.N</th>
                            <th scope="col" className="fw-bold">Title</th>
                            <th scope="col" className="fw-bold">Description</th>
                            <th scope="col" className="fw-bold">Price</th>
                            <th scope="col" className="fw-bold">Action</th>
                          </tr>
                        </MDBTableHead>
                        { localStorage.getItem("user-info") ?
                        data.filter((item) => item.userid === JSON.parse(localStorage.getItem("user-info")).user.id).map((item) => (
                          <MDBTableBody key={item.id}>
                            <tr>
                              <td>
                                <MDBBadge color="secondary" pill>
                                  {sn++
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
                                  rounded
                                  type="button"
                                  size="sm"
                                  className="mx-1"
                                  color="success"
                                  onClick={() => {
                                    navigate(`/updateproduct/${item.id}`);
                                  }}
                                >
                                  <MDBIcon far icon="edit" />
                                </MDBBtn>
                                
                              </td>
                            </tr>
                          </MDBTableBody>
                        )) : null}
                      </MDBTable>
                    </div>
                  </div>
                </MDBCardBody>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </motion.div>
  );
}
