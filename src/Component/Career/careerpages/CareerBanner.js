import React from "react";
import illustration from "../../../images/illustations/Career 1.png";
import illustration2 from "../../../images/illustations/Career.png";
import { Parallax } from "react-scroll-parallax";
function Careerpages() {

  return (
    // <Parallax  scale={[1.1, 0.8]} easing="easeInOut" speed={10} >
      <section className="pages_banner banner_area"  >
   
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ol className="breadcrumb">
                <li>
                  <h2>Career</h2>
                </li>
              </ol>
              <h3 className="projectbanner_title">
              Advance Your Career with Us : Be a part of our dynamic team and drive innovation in the industry

              </h3>
              <figure className="wow zoomIn">
              <img
                src={illustration}
                style={{ width: "80px" }}
                alt=""
                className="banner-lamp" 
              />
            </figure>
            </div>
            <div
              className="col-lg-6 banner_ai wow zoomIn "
              data-wow-delay="0.4s"
            >
              <img
                src={illustration2}
                className="portofolio_art"
                alt=""    
              />
            </div>
          </div>
        </div>
      </section>
    // </Parallax>
  );
}

export default Careerpages;
