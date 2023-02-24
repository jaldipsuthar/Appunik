import React from "react";
import CountUp from "react-countup";
import { Parallax } from "react-scroll-parallax";
function DigitalAgency() {
  return (
    <section className="digital_agency">
      <Parallax scale={[1.1, 0.8]} easing="easeInOut" speed={[10]}>
        <div className="title container">
          <div className="ball">
            <span></span>
          </div>
          <h2>WHY CHOOSE APPUNIK & CREATIVE OUR SERVICES </h2>
          <p>
            Choose AppUnik & Creative for our commitment to delivering
            high-quality IT solutions and services. Our experienced
            professionals are dedicated to understanding your unique business
            needs and providing customized solutions to meet those needs. We
            stay up-to-date with the latest technologies and industry trends to
            ensure that your business stays ahead of the competition. Trust us
            to provide efficient, cost-effective, and innovative solutions that
            will help your business grow.
          </p>
        </div>
      </Parallax>
      <div className="agency_count">
        <Parallax scale={[1.1, 0.8]} easing="easeInOut" speed={[10]}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 countarup_area">
                <div className="counter_item wow zoomIn">
                  <h4>Projects</h4>
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={20} />
                    </span>
                  </h2>
                </div>
                <div className="counter_item  wow zoomIn" data-wow-delay="0.2s">
                  <h4>Cups of Coffee</h4>
                  <h2 className="counter">
                    <CountUp start={0} end={450} />
                  </h2>
                </div>
                <div className="counter_item  wow zoomIn" data-wow-delay="0.4s">
                  <h4>Members</h4>
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={28} />
                    </span>
                  </h2>
                </div>
                <div className="counter_item  wow zoomIn" data-wow-delay="0.6s">
                  <h4>Clients</h4>
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={20} />
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
export default DigitalAgency;
