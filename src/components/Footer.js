import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
const Footer = () => (
  <div className="w-responsive text-center mx-auto p-3 mt-2">
    <div className="footer">
      {/* <div className="social-header">
        <h4>Social</h4>
      </div> */}
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          <WhatsAppOutlined
            style={{ fontSize: "38px", color: "rgba(255,255,255,.55)" }}
          />
        </Link>
        <Link to="contact-form" className="nav-link">
          <InstagramOutlined
            style={{ fontSize: "38px", color: "rgba(255,255,255,.55)" }}
          />
        </Link>
        <Link to="comments" className="nav-link">
          <FacebookOutlined
            style={{ fontSize: "38px", color: "rgba(255,255,255,.55)" }}
          />
        </Link>
      </Nav>
      <div className="copyright">
        <p>Copyright © 2022 Tahtadan Dukkan - All Rights Reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
