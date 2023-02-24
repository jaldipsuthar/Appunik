import React from "react";
import { Parallax } from "react-scroll-parallax";
import illustration from "../../../images/illustations/Portfolio 2.png";
import illustration2 from "../../../images/illustations/Portfolio 1.png";
function ProjectBanner() {
  return (
    <section className="pages_banner banner_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ol className="breadcrumb">
              <li>
                <h2>Portfolio</h2>
              </li>
            </ol>
            <h3 className="projectbanner_title">
              Experience the Quality of Our Services: Our Portfolio
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

          <div className="col-lg-6 banner_ai wow zoomIn " data-wow-delay="0.4s">
            <img src={illustration2} className="portofolio_art" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectBanner;
