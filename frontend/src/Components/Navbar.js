import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React from 'react';
import logoD from '../images/logoD.png';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: '#17A589' }}>
            <Container fluid>
                <Navbar.Brand href="#">Hedical</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                {/* <Link to="/" className="navbar-brand">
                  
        <img
            src={logoD}
            width="50"
            height="50"
            className="d-inline-block align-top mt-1 mr-2"
            style={{marginLeft:"-20px"}}
            alt=""
          />
          Hedical
        </Link> */}
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Our Services</Nav.Link>
                        <Nav.Link href="#action1">Ambulances</Nav.Link>
                        <Nav.Link href="#action1">Hospitals</Nav.Link>
                        <Nav.Link href="#action1">Join Us</Nav.Link>
                        <Nav.Link href="#action1">Blogs</Nav.Link>
                        <Nav.Link href="#action1">About Us</Nav.Link>
                        <Nav.Link href="#action1">Contact Us</Nav.Link>
                        <Nav.Link href="#action1">Enquiry Us</Nav.Link>
                        <Nav.Link href="#action1">Pathology</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    
                        <Button variant="outline-success" >Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;