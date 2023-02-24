import React from "react";
import man from "../../../images/illustations/2.png";
import { Parallax } from "react-scroll-parallax";
import strategy from "../../../images/illustations/1.png";
function Banner() {
  return (
    <section className="banner_area">
      <div className="shap_style style_1 ">
        <span></span>
      </div>
      <div
        className="container"
        // data-aos="zoom-out-up"
        // // data-aos-offset="150"
        // data-aos-easing="ease-out-quart"
        // data-aos-once="false"
      >
        <h2 className="wow fadeInUp">
          TAKE TECHNOLOGY <br />
          BEYOND THOUGHTS
        </h2>
        <p className="wow fadeInUp" data-wow-delay="0.3s">
          We deliver the satisfaction along with the product. Not only the
          product also make relations better.
        </p>
        <ul className="nav strategy_tab wow fadeInUp" data-wow-delay="0.6s">
          <li>
            <a className="active" data-toggle="tab" href="#marketing">
              Design
            </a>
          </li>
          <li>
            <a data-toggle="active" href="#design">
              Development
            </a>
          </li>
        </ul>

        <div
          className="tab-content mt-5"
          data-aos="zoom-out-up"
          data-aos-offset="150"
          data-aos-easing="ease-out-quart"
          data-aos-once="false"
        >
          <div
            className="tab-pane fade show active"
            id="marketing"
            role="tabpanel"
          >
            <img
              src={strategy}
              alt=""
              className="image_1 wow zoomIn"
              loading="lazy"
            />
            <figure className="wow slideInRight ">
              <img src={man} alt="" className="images_2" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
      <div className="shap_style style_2">
        <span></span>
      </div>
    </section>
  );
}
export default Banner;
