import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

function ServicePanel({ panels }) {
  return (
    <>
      <div className="container">
        {panels.map((panel, index) => {
          return (
            <div
              className={
                "row " + ((index + 1) % 2 === 0 ? "alignment " : "") + "margin "
              }
              key={index}
              data-aos="zoom-out-up"
              data-aos-offset="150"
              data-aos-easing="ease-out-quart"
              data-aos-once="false"
            >
              <div
                className="col-lg-6 col-md-6"
                style={{ textAlign: "center" }}
              >
                <img
                  className="service_panel_image"
                  src={panel.image}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service_panel_wrapper">
                  <h2>{panel.title}</h2>
                  <ul>
                    <li>
                      <span>{panel.info1}</span>
                    </li>
                    <li>
                      <span>{panel.info2}</span>
                    </li>
                    <li>
                      <span>{panel.info3}</span>
                    </li>
                    <li>
                      <span>{panel.info4}</span>
                    </li>
                    <li>
                      <span>{panel.info5}</span>
                    </li>
                  </ul>
                  <Link
                    to={panel.to}
                    className="panel_btn_container theme_btn "
                  >
                    Know more
                  </Link>
                  <div className="shap_style style_3">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ServicePanel;
