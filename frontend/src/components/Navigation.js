import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import QuickStatus from"./QuickStatus";

function Navigation() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MyStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Register</Nav.Link>
                            
                        </Nav>
                        <Nav >
                    <QuickStatus/>
                    </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
