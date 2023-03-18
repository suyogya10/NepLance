import { NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBInputGroup, MDBIcon } from "mdb-react-ui-kit";
import img from "./Assets/logo.png";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  
  const navigate = useNavigate();
  if (window.location.pathname === '/') return null;

  function gohome() {
    navigate("/home");
  }

  function logout() {
    localStorage.clear();
    navigate("/home");
  }

  function login() {
    localStorage.clear();
    navigate("/login");
  }

  function register() {
    localStorage.clear();
    navigate("/register");
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={gohome} href="">
            <img src={img} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <MDBInputGroup
            className="d-flex input-group"
            style={{ width: "400px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="What are you looking for?"
              aria-label="search"
              aria-describedby="button-addon2"
            />
            <MDBBtn outline id="button-addon2" color="success">
              Search
            </MDBBtn>
          </MDBInputGroup>
          <Navbar.Collapse className="right-aligned">
            <Nav className="ml-auto">
              {localStorage.getItem("user-info") ? ( // if user is logged in
                <>
                  <Link to="/home" className="link">
                    <MDBIcon fas icon="home" />
                    <a style={{ margin: "6px" }}>Home</a>
                  </Link>
                  <Link to="/explore" className="link">
                    <MDBIcon fas icon="globe" />
                    <a style={{ margin: "5px" }}>Explore</a>
                  </Link>
                  <Link to="/user" className="link">
                    <MDBIcon far icon="user-circle" />
                    <a style={{ margin: "5px" }}>Profile</a>
                  </Link>
                </>
              ) : (
                // if user is not logged in
                <>
                  <Link to="/explore" className="link2">
                    <MDBIcon fas icon="globe" />
                    <a style={{ margin: "5px" }}>Explore</a>
                  </Link>
                  <Nav className="d-flex gap-2">
                    <MDBBtn color="success" onClick={login}>
                      Login
                    </MDBBtn>
                    <MDBBtn color="primary" onClick={register}>
                      Register
                    </MDBBtn>
                  </Nav>
                </>
              )}
            </Nav>
            <Nav>
              {
                localStorage.getItem("user-info") ? ( // if user is logged in
                  <>
                    <MDBBtn color="danger" onClick={logout}>
                      Logout
                    </MDBBtn>
                  </>
                ) : null // if user is not logged in
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
