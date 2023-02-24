import React from "react";
import { Parallax } from 'react-scroll-parallax';
import img1 from "../../../images/illustations/About Us0.png";
import img2 from "../../../images/illustations/About Us.png";
function AboutBanner() {
  
  return (
    // <Parallax  scale={[1.1, 0.8]} easing="easeInOut" speed={10}  translateY={[-10, 10]}>
      <section className="pages_banner banner_area"  >
    
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ol className="breadcrumb">
                <li>
                  <h2>About Us</h2>
                </li>
              </ol>
              <h3 className="aboutbanner_title">
              Unlocking the Potential of Technology: Our Story
              Expertise, Innovation, and Dedication at the core of our IT solutions
              
              </h3>
              <figure className="wow zoomIn">
              <img src={img1} alt="" className="banner-lamp" style={{width: "50px" }} />
            </figure>
            </div>

            <div
              className="col-lg-6 banner_ai wow zoomIn "
              data-wow-delay="0.4s"
            >
              <img src={img2} style={{width: "90%" }} alt="" />
            </div>
          </div>
        </div>
      </section>
    // </Parallax>
  );
}
export default AboutBanner;
