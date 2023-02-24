import React from "react";
import Introducing1 from "../../../images/illustations/5.png";
import { Parallax } from "react-scroll-parallax";
import { useNavigate } from "react-router-dom";
function Introducing() {
  const navigate = useNavigate();
  const handleClick = () => {
    debugger;
    navigate("/Project");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    //<Parallax scale={[1.1, 0.8]} easing="easeInOut" speed={[10]}>
    <section
      className="introducing_area"
      data-aos="zoom-out-up"
      data-aos-offset="150"
      data-aos-easing="ease-out-quart"
      data-aos-once="false"
    >
      <div className="container">
        <div className="title">
          <h4>Our selected works </h4>
          <h2>Introducing Our work</h2>
        </div>
        <div className="row pt-5">
          <div className="col-lg-6 wow zoomIn introducing_img">
            <img
              src={Introducing1}
              alt=""
              className="up_animat"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 introducing">
            <h2></h2>
            <p className="bold_p"></p>
            <p>
              Introducing our portfolio of IT solutions and services, where you
              can see the breadth and depth of our expertise. From software
              development to network infrastructure and cyber security, we have
              a proven track record of delivering successful projects for a
              diverse range of clients. Our work reflects our commitment to
              quality, attention to detail, and customer satisfaction. Browse
              through our portfolio to see how we have helped businesses like
              yours drive growth and achieve their goals.
            </p>
            <span className="theme_btn" onClick={handleClick}>
              View More Work
            </span>
          </div>
        </div>
      </div>
      {/*<figure className="wow zoomIn">
          <img src={Introducing2} alt="" loading="lazy"/>
  </figure>*/}
      <div className="shap_style ss_2 wow zoomIn">
        <span></span>
      </div>
    </section>
    // </Parallax>
  );
}
export default Introducing;
