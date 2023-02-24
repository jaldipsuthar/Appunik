import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter,FaInstagram} from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer_area">
        <div className="container">
          <div className="footer_inner row">
            <div className="col-xl-7 col-lg-6 col-md-6 footer_widget footer_address wow fadeIn">
            <h4>Contact Us</h4>
              <address>
              C 1101-1104, Titanium City Center,
                <br /> Prahladnagar, Ahmadabad,
                <br /> Gujarat-380015
                <span className="number">
                  +91 7435047427
                </span>
                <span>info@appunik.com</span>
                <span>Skype:-  live:info_1024195</span>
                
              </address>
              <ul className="footer_social">
                <li>
                  <a href="/">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagram />
                  </a>
                </li>
               
              </ul>
            </div>
            <div
              className="footer_widget col-md-3 col-sm-6 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <h4>Navigation</h4>
              <ul className="footer_nav">
              <li>
                <a href="/">Home</a>
                </li>
                <li>
                  <a href="/About">About Us</a>
                </li>
              <li>
                <a href="/Project">Portfolio</a>
              </li>
                <li>
                  <a href="/Service">Services</a>
                </li>
                <li>
                  <a href="/Career">Career</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div
              className="footer_widget fw_2 col-xl-2 col-md-3 col-sm-6 wow fadeIn"
              data-wow-delay="0.4s"
            >
              <h4>Solution</h4>
              <ul className="footer_nav">
                <li>
                  <span>Digital marketing</span>
                </li>
                <li>
                  <span>Phototype</span>
                </li>
                <li>
                  <span>Development</span>
                </li>
                <li>
                  <span>Business Strategy</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row copy_right">
            <div className="col-xl-4 col-md-12 wow zoomIn">
              <ul className="copyright_wrapper">
                <li>
                  <p>&copy;APPUNIK</p>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-md-6 wow slideInRight"></div>
            <div className="col-xl-4 order-xl-first  wow slideInLeft">
              <p></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
