import React from "react";
import icon1 from "../../../../../images/icons/Icons.png";
import icon2 from "../../../../../images/icons/Icons-1.png";
import icon3 from "../../../../../images/icons/industry-40.png";
import icon4 from "../../../../../images/icons/layer1.png";
import icon5 from "../../../../../images/icons/on-time.png";
function WebsiteDevlopmentCount() {
  return (
    <div className="service_devlopment_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="app_devlopment_title">
              Custom Mobile-App Solutions For Every <br /> Buisness Models
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="app_count_wrapper wow fadeInLeftBig">
              <img style={{ width: "25%" }} src={icon1} alt="" />
              <h2>5+</h2>
              <p>Year of Experience</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="app_count_wrapper wow zoomIn    ">
            <img style={{ width: "25%" }} src={icon2} alt="" />
              <h2>100%</h2>
              <p >Client Satisfaction</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 wow fadeInRightBig">
            <div className="app_count_wrapper">
            <img style={{ width: "25%" }} src={icon3} alt="" />
              <h2>5+</h2>
              <p>Developed Mobile App</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="offset-2"></div>
          <div className="col-lg-4 col-md-4">
            <div className="app_count_wrapper wow fadeInLeftBig">
              <img style={{ width: "25%" }} src={icon4} alt="" />
              <h2>10+</h2>
              <p>Industries Served</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="app_count_wrapper wow fadeInRightBig">
              <img style={{ width: "25%" }} src={icon5} alt="" />
              <h2>90%</h2>
              <p>On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteDevlopmentCount;
