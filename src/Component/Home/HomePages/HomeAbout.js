import React from "react";
import shape1 from "../../../images/shap/skye-shap-1.png";
import shape2 from "../../../images/illustations/3.png";
import shape3 from "../../../images/illustations/4.png";
import { Parallax } from "react-scroll-parallax";
function About() {
  return (
    // <Parallax scale={[1.1, 0.8]} easing="easeInOut" speed={[10]}>
    <section
      className="about_agency"
      data-aos="zoom-out-up"
      data-aos-offset="150"
      data-aos-easing="ease-out-quart"
      data-aos-once="false"
    >
      <div className="shap_bg">
        <img src={shape1} alt="" loading="lazy" />
      </div>
      <div className="container">
        <div className="title">
          <h4>About agency</h4>
          <h2>Why choose AppUnik &amp; Creative Our services</h2>
          <h5>
            Creative Agency <i>studios</i>
          </h5>
        </div>
        <div className="row">
          <div className="col-lg-4 wow zoomIn">
            <img src={shape2} alt="" className="up_animat" loading="lazy" />
          </div>
          <div className="col-lg-5 studios_text">
            <h6 className="wow fadeInUp"></h6>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Choose AppUnik & Creative for our commitment to delivering
              high-quality IT solutions and services. Our experienced
              professionals are dedicated to understanding your unique business
              needs and providing customized solutions to meet those needs. We
              stay up-to-date with the latest technologies and industry trends
              to ensure that your business stays ahead of the competition. Trust
              us to provide efficient, cost-effective, and innovative solutions
              that will help your business grow.
            </p>
            <span className="theme_btn wow fadeInUp" data-wow-delay="0.4s">
              Find Out More <i className="fas fa-caret-right"></i>
            </span>
          </div>
        </div>
      </div>
      <img
        src={shape3}
        alt=""
        className="about_bg wow zoomIn up_animat"
        loading="lazy"
      />
    </section>
    //</Parallax>
  );
}
export default About;
