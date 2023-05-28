import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>
            Just worship is an annual worship and praise outreach, organized by
            a team of worship leaders in and outside Nigeria with the sole
            intent of inspiring intimacy with God through worship and praise.
          </p>
        </div>
        <div class="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a
                href="https://maps.google.com/maps?q=51 Unity St, Abakpa 400103, Enugu"
                target="_blank"
              >
                < MdOutlineLocationOn className="icon" /> 123 Main Street
              </a>
            </li>
            <li><a href="mailto:info@example.com " target="_blank">< MdOutlineMail className="icon" />info@example.com</a></li>
            <li><a href="tel:+11234567890">< MdOutlineLocalPhone className="icon" />+1 123 456 7890</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-media">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
