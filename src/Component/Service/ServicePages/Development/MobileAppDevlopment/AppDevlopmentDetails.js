import React from "react";
import appImage from "../../../../../images/background/bgArt.png"
function AppDevlopmentDetails({ details }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="app_details_wrapper">
              <p className="app_details_wrapper_top">SOLUTIONS</p>
              <p className="app_details_wrapper_bottom">
                Mobile App Development Services We Offer
              </p>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-12">
        <img src={appImage} style={{width:"100%"}} alt=""/>
        </div>
        </div>
      
      </div>
    </>
  );
}

export default AppDevlopmentDetails;
