import React from "react";
import "./index.css"

function ServiceCounter({ counters }) {
  return (
    <>
      {counters.map((count, index) => {
        return (
 
          <div className="service_devlopment_container" key={index}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="app_devlopment_title">
                 {count.title}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 mt-3">
                  <div className="app_count_wrapper wow fadeInLeftBig">
                    <img style={{ width: "25%" }} src={count.image1} alt="" />
                    <h2>{count.value1}</h2>
                    <p>{count.info1}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-3">
                  <div className="app_count_wrapper wow zoomIn    ">
                    <img style={{ width: "25%" }} src={count.image2} alt="" />
                    <h2>{count.value2}</h2>
                    <p>{count.info2}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-3 wow fadeInRightBig">
                  <div className="app_count_wrapper ">
                    <img style={{ width: "25%" }} src={count.image3} alt="" />
                    <h2>{count.value3}</h2>
                    <p>{count.info3}</p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="offset-2"></div>
                <div className="col-lg-4 col-md-4 mt-3">
                  <div className="app_count_wrapper wow fadeInLeftBig">
                    <img style={{ width: "25%" }} src={count.image4} alt="" />
                    <h2>{count.value4}</h2>
                    <p>{count.info4}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-3">
                  <div className="app_count_wrapper wow fadeInRightBig">
                    <img style={{ width: "25%" }} src={count.image5} alt="" />
                    <h2>{count.value5}</h2>
                    <p>{count.info5}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

        );
      })}
    </>
  );
}

export default ServiceCounter;
