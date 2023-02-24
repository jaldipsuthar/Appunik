import React from "react";
import service1 from "../../../images/icons/services-icons-1.png";
import service2 from "../../../images/icons/services-icons-2.png";
import service3 from "../../../images/icons/services-icons-3.png";
import { Parallax } from "react-scroll-parallax";
function Service() {
  return (
    //  <Parallax    scale={[1.1, 0.8]}     easing="easeInOut"      speed={[10]}      style={{        transition: "transform 0.2s easy",  }}    >
    <section className="services_area">
      <div className="shap_style ss_2 wow zoomIn">
        <span></span>
      </div>
      <div
        className="container"
        data-aos="zoom-out-up"
        data-aos-offset="150"
        data-aos-easing="ease-out-quart"
        data-aos-once="false"
      >
        <div className="title">
          <h2>Services</h2>
          {/*<h2>Creative AppUnik Team & AppUnik services</h2>*/}
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 wow fadeInUp">
            <div className="services_items">
              <div className="icons">
                <img src={service1} alt="" />
                <span></span>
              </div>
              <a href="/">Mobile App Development</a>
              <p>
                Our company offers a wide range of mobile app development
                services to help businesses and organizations create
                high-quality, user-friendly apps that meet their specific needs.
                Our team of experienced developers and designers can work with
                you to create custom apps for iOS, Android, and other mobile
                platforms.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="services_items">
              <div className="icons">
                <img src={service2} alt="" className="icon_2" loading="lazy" />
                <span></span>
              </div>
              <a href="/">Website development</a>
              <p>
                We offer comprehensive website development services, including
                design, and development for businesses of all sizes. Our team of
                experts uses the latest technologies and design trends to create
                custom websites that are visually appealing, user-friendly, and
                optimized for search engines.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="services_items">
              <div className="icons">
                <img src={service3} alt="" className="icon_3" loading="lazy" />
                <span></span>
              </div>
              <a href="/">UX/UI design</a>
              <p>
                Our company provides professional UI/UX design services to
                enhance the user experience and improve the overall design of
                your digital products. Our team of designers specializes in
                creating intuitive and visually appealing interfaces that are
                tailored to meet the specific needs of your target audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  </Parallax>
  );
}
export default Service;
