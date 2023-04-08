import React from "react";
import {
    MDBBadge,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn,
    MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function UserListings() {

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
  return (
    <div className="flex-grow-1 ms-3">
                      <h3 className="profiletitle2">Your Services</h3>
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
  );
}

export default UserListings;