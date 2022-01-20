import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Navibar() {
  const [expanded, setExpanded] = useState(false);

  //instead of Nav.Link Nav.Item used to avoid warning
  return (
    <Navbar expanded={expanded} fixed="top" expand="lg" variant="dark">
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Item onClick={() => setExpanded(false)} ele>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item onClick={() => setExpanded(false)} ele>
            <Link className="nav-link" to="works">
              Portfolio
            </Link>
          </Nav.Item>
          <Nav.Item onClick={() => setExpanded(false)} ele>
            <Link className="nav-link" to="comments">
              Comments
            </Link>
          </Nav.Item>
          <Nav.Item onClick={() => setExpanded(false)} ele>
            <Link className="nav-link" to="contact-form">
              Contact Form
            </Link>
          </Nav.Item>
          <Nav.Item onClick={() => setExpanded(false)} ele>
            <Link className="nav-link" to="bookings">
              Booking Form
            </Link>
          </Nav.Item>
          <Nav.Item onClick={() => setExpanded(false)} ele>
            <Link className="nav-link" to="admin">
              Admin
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// import React from "react";
// import { Nav, Navbar } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// export default function Navibar() {
//   return (
//     <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//           <Link to="contact-form" className="nav-link">
//             Contact Form
//           </Link>
//           <Link to="comments" className="nav-link">
//             Your Comments
//           </Link>
//           <Link to="bookings" className="nav-link">
//             Book your Carpenter
//           </Link>
//           <Link to="works" className="nav-link">
//             Portfolio
//           </Link>
//           <Link to="admin" className="nav-link">
//             Admin
//           </Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
