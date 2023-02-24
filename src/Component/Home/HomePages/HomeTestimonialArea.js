import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import testimonial1 from "../../../images/client/client1.png";
import testimonial2 from "../../../images/client/client2.jpg";
import testimonial3 from "../../../images/client/client3.jpg";
import testimonial4 from "../../../images/client/client4.jpg";
import testimonial5 from "../../../images/client/client3.jpg";
import { Parallax } from "react-scroll-parallax";
function TestimonialArea() {
  return (
    // <Parallax scale={[1.1, 0.8]} easing="easeInOut" speed={[10]}>
    <section className="testimonial_area">
      <div
        className="container"
        data-aos="zoom-out-up"
        data-aos-offset="150"
        data-aos-easing="ease-out-quart"
        data-aos-once="false"
      >
        <div className="title">
          {/*<h4>Testimonial</h4>*/}
          <h2>Client Feedback</h2>
        </div>
        <div className="carousel slide ts_slide" data-ride="carousel" data-interval="1500">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p>
                We’re on a mission to start a conversation with your customers
                in this fast connected world. Let’s discover, build and grow
                your digital business.
              </p>
              <a href="/">Emran Khan</a>
              <h6>Web Developer</h6>
            </div>

            <div className="carousel-item">
              <p>
                We’re on a mission to start a conversation with your customers
                in this fast connected world. Let’s discover, build and grow
                your digital business.
              </p>
              <a href="/">Mahfuz Riad</a>
              <h6>Ux &amp; Product Designer</h6>
            </div>
            <div className="carousel-item">
              <p>
                We’re on a mission to start a conversation with your customers
                in this fast connected world. Let’s discover, build and grow
                your digital business.
              </p>
              <a href="/">Mahfuz Riad</a>
              <h6>Ux &amp; Product Designer</h6>
            </div>
          </div>
          <ol className="indicators">
            <li data-target=".ts_slide" data-slide-to="0" className="active">
              1
            </li>
            <li data-target=".ts_slide" data-slide-to="1">
              2
            </li>
            <li data-target=".ts_slide" data-slide-to="2">
              3
            </li>
          </ol>
        </div>
      </div>
      <ul
        className="indicators_img row"
        data-aos="zoom-out-up"
        data-aos-offset="150"
        data-aos-easing="ease-out-quart"
        data-aos-once="false"
      >
        <li className="col wow zoomIn">
          <figure>
            <img src={testimonial1} alt="" />
          </figure>
        </li>
        <li className="col wow zoomIn" data-wow-delay="0.2s">
          <figure>
            <img src={testimonial2} alt="" />
          </figure>
        </li>
        <li className="col wow zoomIn" data-wow-delay="0.4s">
          <figure>
            <img src={testimonial3} alt="" />
          </figure>
        </li>
        <li className="col wow zoomIn" data-wow-delay="0.6s">
          <figure>
            <img src={testimonial4} alt="" />
          </figure>
        </li>
        <li className="col wow zoomIn" data-wow-delay="0.8s">
          <figure>
            <img src={testimonial5} alt="" />
          </figure>
        </li>
      </ul>
    </section>
    // </Parallax>
  );
}

export default TestimonialArea;
