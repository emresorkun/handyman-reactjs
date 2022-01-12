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
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="contact-form" className="nav-link">
            Contact Form
          </Link>
          <Link to="comments" className="nav-link">
            Your Comments
          </Link>
          <Link to="bookings" className="nav-link">
            Book your Carpenter
          </Link>
          <Link to="works" className="nav-link">
            Portfolio
          </Link>
          <Link to="admin" className="nav-link">
            Admin
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
