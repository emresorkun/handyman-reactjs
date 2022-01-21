/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Nav } from "react-bootstrap";
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
const Footer = () => (
  <div className="footer">
    <div className="w-responsive text-center mx-auto p-3 mt-2">
      <Nav className="mr-auto">
        <a
          target="_blank"
          href="https://www.instagram.com/tahtadantukkan/"
          className="nav-link"
        >
          <WhatsAppOutlined
            style={{ fontSize: "38px", color: "rgba(255,255,255,.55)" }}
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/tahtadantukkan/"
          className="nav-link"
        >
          <InstagramOutlined
            style={{ fontSize: "38px", color: "rgba(255,255,255,.55)" }}
          />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100009095115029"
          className="nav-link"
        >
          <FacebookOutlined
            style={{ fontSize: "38px", color: "rgba(255,255,255,.55)" }}
          />
        </a>
      </Nav>
      <div className="copyright">
        <p>Copyright © 2022 T.D - All Rights Reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
