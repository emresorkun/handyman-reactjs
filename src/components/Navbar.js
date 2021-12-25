import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="contact-form">Contact Form</Nav.Link>
          <Nav.Link href="comments">Your Comments</Nav.Link>
          <Nav.Link href="bookings">Book your Carpenter</Nav.Link>
          <Nav.Link href="works">Completed Works</Nav.Link>
          <Nav.Link href="admin">Carpenter Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
