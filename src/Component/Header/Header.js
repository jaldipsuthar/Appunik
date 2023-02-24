import React, { useState, useEffect } from "react";
import newlogo from "../../images/Appunik final Logo - png.png";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scroll, setScroll] = useState("");
  const [close, setClose] = useState("");
  useEffect(() => {

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 200);
    });
    
  }, []);

  const handleScroll = (e) => {
 
    let body = document.getElementById("#root")
    body.scrollBy({
         top: 0,
         behavior: "instant",
    });

  };

  // const toggleMenu = (e) => {
  //   if (e) {
  //     e.preventDefault();
  //   }
  //   setClose({ collapse: !setClose.collapse });
  // };
  return (
    <div>
      <header
        className={
          scroll ? "main_header_area navbar_fixed" : "main_header_area"
        }
      >
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-brand">
            <a className="logo" href="/">
              <img src={newlogo} alt="logo"  />
            </a>
          </div>
          <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar_supported"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>

          <div
            className="collapse navbar-collapse navbar_supported"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <ul className="navbar-nav">
              <li>
                <Link to="/Home" onClick={handleScroll}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/Project" onClick={handleScroll}>
                  Portfolio
                </Link>
              </li>
              <li className="dropdown">
                <Link to="/Service" onClick={handleScroll}>
                  Services
                </Link>
                {/*<ul className="dropdown-menu">
                  <div className="flex-child ">
                    {" "}
                    <li>
                      <a href="/">Mobile App Development</a>
                    </li>
                    <li>
                      <a href="/service/webdevlopment">Web Development</a>
                    </li>
                    <li>
                      <a href="/">Hybrid App Development</a>
                    </li>
                    <li>
                      <a href="/"> AR App Development</a>
                    </li>
                    <li>
                      <a href="/">ECommerce Development </a>
                    </li>
                    <li>
                      <a href="/"> Website Designing</a>
                    </li>
                  </div>

                  <div className="flex-child ">
                    {" "}
                    <li>
                      <a href="/">UX/UI Design</a>
                    </li>
                    <li>
                      <a href="/">Shopify Development</a>
                    </li>
                    <li>
                      <a href="/">BlockChain / NFT Development </a>
                    </li>
                    <li>
                      <a href="/"> Search Engine Optimization</a>
                    </li>
                    <li>
                      <a href="/">Digital Marketing </a>
                    </li>
                    <li>
                      <a href="/">Quality Assurance </a>
                    </li>
                  </div>
      </ul> */}
              </li>
              <li>
                <Link to="/About" onClick={handleScroll}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Career" onClick={handleScroll}>
                  {" "}
                  Career
                </Link>
              </li>

              <li>
                <Link to="/Contact" onClick={handleScroll}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
