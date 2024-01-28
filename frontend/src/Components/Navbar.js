import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import logoD from "../images/logoD.png";
import "../App.css";
import LoginPopup from "./LoginPopup";
function NavbarComponent() {
  const [showLoginCard,setshowLoginCard]=useState(false)
  const handleLoginClick=()=>{
     setshowLoginCard(!showLoginCard);
  }
  const handleCloseLoginPopup=()=>{
    setshowLoginCard(false);
  }
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#17A589" }}>
      <Container fluid>
        <img
          src={logoD}
          width="50"
          height="50"
          className="d-inline-block align-top mt-1 mr-2"
          style={{ marginLeft: "10px" }}
          alt=""
        />
        <Navbar.Brand href="#">RailHealth</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   backgroundColor: "yellow",
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "#333",
                marginBottom: "3px",
                width: "20px",
                height: "3px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#333",
                marginBottom: "3px",
                width: "20px",
                height: "3px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#333",
                marginBottom: "3px",
                width: "20px",
                height: "3px",
              }}
            ></div>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: "white" }}>
              Our Services
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Consult Doctors
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Train Tools
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              My Order
            </Nav.Link>
            {/* <Nav.Link href="#action1" style={{color:'white'}}>Blogs</Nav.Link> */}
            <Nav.Link href="#action1" style={{ color: "white" }}>
              About Us
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              variant="outline-success"
              onClick={handleLoginClick}
              style={{ backgroundColor: "#33acdd", color: "#FFFFFF" }}
            >
              Login
            </Button>
            {showLoginCard && <LoginPopup onClose={handleCloseLoginPopup} />}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
