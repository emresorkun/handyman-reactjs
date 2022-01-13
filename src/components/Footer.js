import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => (
  <div className="footer">
    <p>HERE COMES THE FOOTER CONTENT</p>
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
  </div>
);

export default Footer;
