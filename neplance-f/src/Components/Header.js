import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import img from "./Assets/logo.png";
import Footer from "./Footer";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function Header() {
  const navigate = useNavigate();

  function login() {
    localStorage.clear();
    navigate("/login");
  }

  function logout() {
    localStorage.removeItem("user-info");
    navigate("/login");
    window.location.reload(false);
  }

  return (
    <>
      <div style={{ marginBottom: "65px" }}>
        <Navbar bg="light" expand="sm" fixed="top">
          <Container>
            <Navbar.Brand
              onClick={() => {
                navigate("/home");
              }}
              href=""
              style={{ cursor: "pointer" }}
            >
              <img src={img} alt="logo" style={{ maxHeight: "40px" }} />
            </Navbar.Brand>
            <Navbar.Collapse className="right-aligned">
              <Nav className="ml-auto align-items-center">
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
                    <Link to={"/chat"} className="link">
                      <MDBIcon far icon="comments" />
                      <a style={{ margin: "5px" }}>Messages</a>
                    </Link>
                    <NavDropdown
                      title={
                        JSON.parse(localStorage.getItem("user-info")).user.name
                      }
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item
                        onClick={() => {
                          navigate("/user");
                        }}
                      >
                        Profile{" "}
                        <MDBIcon color="success" fas icon="user-circle" />
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logout}>
                        Logout{" "}
                        <MDBIcon color="danger" fas icon="sign-out-alt" />
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  // if user is not logged in
                  <>
                    <Link to="/explore" className="link2">
                      <MDBIcon fas icon="globe" />
                      <a style={{ margin: "5px" }}>Explore</a>
                    </Link>
                    <Nav className="d-flex gap-2">
                      <MDBBtn rounded color="success" onClick={login}>
                        Join
                      </MDBBtn>
                    </Nav>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
