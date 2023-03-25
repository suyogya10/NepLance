import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export function Product() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const ApiHandler = async () => {
    let result = await fetch(
      "http://localhost:8000/api/getSingleProduct/" + id
    );
    result = await result.json();
    setData(result);
    let result1 = await fetch(
      "http://localhost:8000/api/getUser/" + data.userid
    );
    result1 = await result1.json();
    setData1(result1);
  };
  useEffect(() => {
    ApiHandler();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ backgroundColor: "#efefef" }}>
        <MDBContainer>
          <MDBRow>
            <MDBCard
              style={{
                borderRadius: "15px",
                width: "1300px",
                height: "640px",
                marginTop: "20px",
              }}
            >
              <MDBRow>
                <MDBCol>
                  <MDBCardImage
                    src={"http://localhost:8000/" + data.file_path}
                    alt="..."
                    position="top"
                    style={{
                      width: "700px",
                      height: "500px",
                      marginTop: "70px",
                      marginLeft: "20px",
                    }}
                  />
                </MDBCol>
                <MDBCol>
                  <MDBCardBody style={{ marginTop: "40px", color: "black" }}>
                    <MDBCardTitle>
                      <h1>{data.name}</h1>
                    </MDBCardTitle>
                    <MDBCardText>{data.description}</MDBCardText>
                    <MDBCardText>Price: Rs. {data.price}</MDBCardText>
                    <MDBCardText>Category: {data.category}</MDBCardText>

                    <MDBBtn
                      color="success"
                      style={{
                        width: "200px",
                        height: "50px",
                        marginTop: "10px",
                      }}
                    >
                      <MDBIcon fas icon="shopping-cart" /> Add to Cart
                    </MDBBtn>
                    <h6 style={{ marginTop: "20px" }}>Listed By:</h6>
                    <MDBCard style={{ borderRadius: "15px", marginTop: "5px" }}>
                      <MDBCardBody className="p-4">
                        <div className="d-flex text-black">
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              style={{ width: "180px", borderRadius: "10px" }}
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                              alt="Generic placeholder image"
                              fluid
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <MDBCardTitle>{data1.name}</MDBCardTitle>
                            <MDBCardText>{data1.designation}</MDBCardText>

                            <div
                              className="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <div className="px-3">
                                <p className="small text-muted mb-1">
                                  Followers
                                </p>
                                <p className="mb-0">976</p>
                              </div>
                              <div>
                                <p className="small text-muted mb-1">Rating</p>
                                <p className="mb-0">8.5</p>
                              </div>
                            </div>
                            <div className="d-flex pt-1">
                              <MDBBtn
                                outline
                                color="success"
                                className="me-1 flex-grow-1"
                              >
                                Email
                              </MDBBtn>
                              <MDBBtn color="success" className="flex-grow-1">
                                Follow
                              </MDBBtn>
                            </div>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
        <div>
          <h1 style={{ textAlign: "center", marginTop: "20px" }}>
            
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

export default Product; 
