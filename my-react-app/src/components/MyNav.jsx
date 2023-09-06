import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
function MyNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">My Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browser</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNav;
