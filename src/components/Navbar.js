import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Navibar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="contact-form">Contact Form</Link>
          <Link to="comments">Your Comments</Link>
          <Link to="bookings">Book your Carpenter</Link>
          <Link to="works">Portfolio</Link>
          <Link to="admin">Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
