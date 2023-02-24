import React from "react";
import CountUp from "react-countup";
import { Parallax } from "react-scroll-parallax";
function AboutProject() {
  return (
    <section
      className="pricing_area "
      data-aos="zoom-out-up"
      data-aos-offset="150"
      data-aos-easing="ease-out-quart"
      data-aos-once="false"
    >
      <div className="shap_style ss_2 wow zoomIn">
        <span></span>
      </div>
      <div className="container">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="monthly"
            role="tabpanel"
          >
            <div className="row">
              <div className="col-lg-3 col-md-6  wow fadeIn">
                <div className="plan">
                  <h2>
                    <CountUp start={0} end={10} duration={1.5} /> +
                  </h2>

                  <span className="project_title">Web project</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeIn">
                <div className="plan">
                  <h2>
                    <CountUp start={0} end={20} duration={1.5} /> +
                  </h2>

                  <span className="project_title">Mobile project</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeIn">
                <div className="plan">
                  <h2>
                    <CountUp start={0} end={20} duration={1.5} />
                    k+
                  </h2>

                  <span className="project_title">Hours Worked</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeIn">
                <div className="plan">
                  <h2>
                    <CountUp start={0} end={24} duration={1.5} />*
                    <CountUp start={0} end={7} duration={1.5} />
                  </h2>

                  <span className="project_title">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
