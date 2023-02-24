import React from "react";
import { Parallax } from "react-scroll-parallax";
function AboutWork({ works }) {
  return (
    <div>
      <div className="container">
        <div
          className="row"
          data-aos="zoom-out-up"
          data-aos-offset="150"
          data-aos-easing="ease-out-quart"
          data-aos-once="false"
        >
          <div className="col-lg-12">
            <h3 className="aboutwork_title">How We Work?</h3>
          </div>
        </div>

        {works.map((work, index) => {
          return (
            <div
              className={index === works.length - 1 ? "last" : ""}
              key={index}
              data-aos="zoom-out-up"
              data-aos-offset="150"
              data-aos-easing="ease-out-quart"
              data-aos-once="false"
            >
              <div
                className={
                  "row " +
                  ((index + 1) % 2 === 0 ? "alignment " : "") +
                  "mt-5" +
                  "process_height"
                }
                key={index}
              >
                <div className="col-lg-6 col-md-6">
                  <div className="aboutwork_wrapper">
                    {/*<img src={work.icon} alt="" /> */}
                    <h2 className="about_wrapper_title">{work.title}</h2>
                    <h6 className="about_wrapper_info">{work.detail}</h6>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <img
                    src={work.image}
                    className="vector_art_flow"
                    alt={work.imageInfo}
                    loading="lazy"
                  />
                  <div
                    className={
                      (index + 1) % 2 === 0 ? "left-arrow " : "right-arrow"
                    }
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutWork;
