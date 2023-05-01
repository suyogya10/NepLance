import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserInterest() {
  const navigate = useNavigate();
  const [interests, setInterests] = useState([]);
  function handleInterestChange(interest) {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else if (interests.length < 3) {
      setInterests([...interests, interest]);
    } else {
      setInterests([...interests.slice(1), interest]);
    }
  }
  function handleSubmit() {
    const id = JSON.parse(localStorage.getItem("user-info")).user.id;
    const selectedInterests = interests.join(",");
    console.log(selectedInterests);
    let formData = new FormData();
    formData.append("keywords", selectedInterests);
    fetch("http://localhost:8000/api/putKeywords/" + id + "?_method=PUT", {
      method: "POST",
      body: formData,
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    alert("Interests Updated Successfully");
    navigate("/home");
  }

  return (
    <>
      <MDBContainer fluid className="p-5" style={{ marginTop: "50px" }}>
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Let your interests
              <br />
              <span className="text-success">shape your experience</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Pick any 3 or more categories that you are interested in. We will
              show you the best freelancers and services based on your
              interests.
            </p>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <div className="d-flex gap-5 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value="account-finance"
                    id="flexCheckDefault"
                    label="Accounting & Finance"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="administrative"
                    id="flexCheckDefault"
                    label="Administrative"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="computer-it"
                    id="flexCheckDefault"
                    label="Computer & IT"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                </div>
                <div className="d-flex gap-5 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value="customerservice"
                    id="flexCheckDefault"
                    label="Customer Service"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="design-editing"
                    id="flexCheckDefault"
                    label="Design & Editing"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="education-training"
                    id="flexCheckDefault"
                    label="Education & Training"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                </div>
                <div className="d-flex gap-5 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value="hr-recruit"
                    id="flexCheckDefault"
                    label="HR & Recruiting"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="medical-health"
                    id="flexCheckDefault"
                    label="Medical & Health"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    value="writing"
                    id="flexCheckDefault"
                    label="Writing"
                    onChange={(event) =>
                      handleInterestChange(event.target.value)
                    }
                  />
                </div>

                <MDBBtn
                  color="success"
                  rounded
                  className="w-100 mb-4"
                  size="md"
                  onClick={handleSubmit}
                >
                  Continue <MDBIcon fas icon="arrow-right" />
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default UserInterest;
