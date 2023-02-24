import React from "react";
import Service1 from "../../../images/illustations/Service 1.png";
import Service2 from "../../../images/illustations/Service 2.png";
import { Parallax } from "react-scroll-parallax";
function ServiceBanner() {
  return (
    <section
      className="pages_banner banner_area"

    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ol className="breadcrumb">
              <li>
                <h2>Service</h2>
              </li>
            </ol>
            <h3 className="projectbanner_title">
              We harness power of design ,combine with technology and build
              digital experience that transform lives.
            </h3>
            <figure className="wow zoomIn">
              <img
                src={Service1}
                style={{ width: "100px" }}
                alt=""
                className="banner-lamp"
              />
            </figure>
          </div>

          <div className="col-lg-6 banner_ai wow anime " data-wow-delay="0.4s">
            <img src={Service2} className="service_art" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceBanner;
