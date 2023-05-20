import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import img from "./Assets/logo.png";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useNotification } from "use-toast-notification";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function Header() {
  const navigate = useNavigate();

  const [showA, setShowA] = useState(false);
  const notification = useNotification();

  const toggleShowA = () => setShowA(!showA);

  let id = "";

  if (localStorage.getItem("user-info") === null) {
    id = "";
  } else {
    id = JSON.parse(localStorage.getItem("user-info")).user.id;
  }

  useEffect(() => {
    socket.emit("join-notification", 6969 + id);
  }, []);

  useEffect(() => {
    const handleNotification = (data) => {
      notification.show({
        message: `Message from ${data.username}`,
        title: "New Message",
        variant: "success",
      });
    };

    socket.on("notification", handleNotification);

    return () => {
      socket.off("notification", handleNotification);
    };
  }, []);

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
                    {/* <Link to="/home" className="link">
                      <MDBIcon fas icon="home" />
                      <a style={{ margin: "6px" }}>Home</a>
                    </Link> */}
                    <Link to="/explore" className="link">
                      <MDBIcon fas icon="th" />
                      <a style={{ margin: "5px" }}>Categories</a>
                    </Link>
                    <Link to="/recommended" className="link2">
                      <MDBIcon fas icon="globe" />
                      <a style={{ margin: "5px" }}>Explore</a>
                    </Link>
                    <Link to="/aboutus" className="link2">
                      <MDBIcon fas icon="info-circle" />
                      <a style={{ margin: "5px" }}>About</a>
                    </Link>
                    {/* <Link to={"/chat"} className="link">
                      <MDBIcon far icon="comments" />
                      <a style={{ margin: "5px" }}>Messages</a>
                    </Link> */}
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
                      <NavDropdown.Item
                        onClick={() => {
                          navigate("/chat");
                        }}
                      >
                        Messages <MDBIcon color="success" far icon="comments" />
                      </NavDropdown.Item>
                      {JSON.parse(localStorage.getItem("user-info")).user
                        .registered_as === "seller" ? (
                        <NavDropdown.Item
                          onClick={() => {
                            navigate("/jobs");
                          }}
                        >
                          Browse Jobs{" "}
                          <MDBIcon color="success" fab icon="searchengin" />
                        </NavDropdown.Item>
                      ) : (
                        <></>
                      )}
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
                      <MDBIcon fas icon="th" />
                      <a style={{ margin: "5px" }}>Categories</a>
                    </Link>
                    {/* <Link to="/recommended" className="link2">
                      <MDBIcon fas icon="globe" />
                      <a style={{ margin: "5px" }}>Explore</a>
                    </Link> */}
                    <Link to="/aboutus" className="link2">
                      <MDBIcon fas icon="info-circle" />
                      <a style={{ margin: "5px" }}>About</a>
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
