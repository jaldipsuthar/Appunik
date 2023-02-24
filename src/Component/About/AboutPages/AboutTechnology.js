import React from "react";
import tech1 from "../../../images/4/1.svg";
import tech2 from "../../../images/4/2.svg";
import tech3 from "../../../images/4/3.svg";
import tech4 from "../../../images/4/4.svg";
import tech5 from "../../../images/4/5.svg";
import tech6 from "../../../images/4/6.svg";
import tech7 from "../../../images/4/7.svg";
import tech8 from "../../../images/4/8.svg";
import tech9 from "../../../images/4/9.svg";
import tech10 from "../../../images/4/10.svg";
import tech11 from "../../../images/4/11.svg";
import { Parallax } from "react-scroll-parallax";
import AboutSlider from "./AboutSlider";
function AboutTechnology() {
  return (
    <div
      className="about-vision-container"
      data-aos="zoom-out-up"
      data-aos-offset="150"
      data-aos-easing="ease-out-quart"
      data-aos-once="false"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="about-technology-title">Technology we use</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <AboutSlider sliderImages={sliderImages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTechnology;

const sliderImages = [
  { image: tech1 },
  { image: tech2 },
  { image: tech3 },
  { image: tech4 },
  { image: tech5 },
  { image: tech6 },
  { image: tech7 },
  { image: tech8 },
  { image: tech9 },
  { image: tech10 },
  { image: tech11 },
];
