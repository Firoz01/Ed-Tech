import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="scroll-top mt-5">
        <button onClick={scrollToTop}>Back To Top</button>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row footer-details">
            <div className="col-4 col-lg-3">
              <h4>Customer Care</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/contact">Click & Collect</a>
                </li>
                <li>
                  <a href="/contact">Returns & Refunds</a>
                </li>
                <li className="footer-display-none">
                  <a href="/contact">Payment Option</a>
                </li>
                <li className="footer-display-none">
                  <a href="/contact">Payment Security</a>
                </li>
                <li className="footer-display-none">
                  <a href="/contact">FAQs</a>
                </li>
                <li>
                  <a href="/contact">Ed Tech Online Education</a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-lg-3">
              <h4>Services</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Online Courses</a>
                </li>
                <li>
                  <a href="/contact">Be a Tuitor</a>
                </li>
                <li>
                  <a href="/contact">Sell Your Course</a>
                </li>
                <li>
                  <a href="/contact">Enroll in a Course</a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-lg-3">
              <h4>Yours Security</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/contact">Privacy Policy</a>
                </li>
                <li>
                  <a href="/contact">Cookie Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-lg-3">
              <h4>Follow Us on</h4>
              <div class="social-links">
                <NavLink to="#">
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </NavLink>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </NavLink>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </NavLink>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-description footer-display-none mt-4">
          <p>© 2022 Ed Tech Educational platform</p>
          <small>
            We understand that education is not only in the classroom, and that
            as technology evolves so do the opportunities in education. Our
            research in digital education has led us to explore the way that
            digital advancement is transforming education, whether in formal
            education, lifelong learning, via online or blended learning. This
            expertise informs our teaching on our specialist postgraduate
            programmes in Digital Education
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
