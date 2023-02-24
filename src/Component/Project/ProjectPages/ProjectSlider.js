import React from "react";
import { Parallax } from "react-scroll-parallax";
import Slider from "./slider/Slider";
function ProjectSlider(props) {
  const projectProvide = props.projectProvide;
  const htmlData = [];

  const getNewSlider = (sliderImages, parentIndex) => {
    return sliderImages ? (
      <div className="project-slider-container">
        <Slider
          key={`new_slider_${parentIndex}`}
          parentIndex={parentIndex}
          isEven={(parentIndex + 1) % 2 === 0}
          sliderImages={sliderImages}
        ></Slider>
      </div>
    ) : null;
  };

  projectProvide.forEach((project, index) => {
    htmlData.push(

        <div
          className={
            "row " + ((index + 1) % 2 === 0 ? "alignment " : "") + "row_spacing"
          }
          key={`project_provided_${index}`}
          id="wrap"
          data-aos="zoom-out-up"
          data-aos-offset="50"
          data-aos-easing="ease-out-quart"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div
            className="col-lg-6 "
            style={{
              background: `url(${project.image})`,
              backgroundSize: `96% 100% `,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
            }}
          >
            <div
              className={project.isBackground ? "project-container-border" : ""}
            >
              {getNewSlider(project.sliderImages, index)}
            </div>
          </div>
          <div className="col-lg-6 project-info" key={`project-info_${index}`}>
            <div className="project-info_wrapper">
              <h2>{project.title}</h2>
              <p>{project.text}</p>
              <div className="shap_style style_2">
                <span></span>
              </div>
            </div>
          </div>
        </div>

    );
  });
  return (
    <div className="slider_container">
      <div className="container">{htmlData}</div>
    </div>
  );
}

export default ProjectSlider;
