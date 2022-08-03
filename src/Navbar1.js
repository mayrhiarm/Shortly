import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import image from "./images/logo.svg";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={image} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="change">
                <Nav className="me-auto navlinks">
                  <Nav.Link href="#home">
                    <a className="gift" href="">
                      {" "}
                      Features
                    </a>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <a className="gift" href="">
                      {" "}
                      Pricing
                    </a>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <a className="gift" href="">
                      Resources
                    </a>
                  </Nav.Link>
                  <hr className="hr" />
                  <span className="mylinks">
                    <Nav.Link href="#link">
                      <a className="gift" href="">
                        Login
                      </a>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <button className="btn btn-nav">Sign UP</button>
                    </Nav.Link>
                  </span>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navbar1;
