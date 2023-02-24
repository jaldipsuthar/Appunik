import React from "react";
import "./Banner.css";
function Banner({ banner }) {
  return (
    <div>
      {banner.map((item, index) => {
        return (
     
            <section className="pages_banner banner_area" key={index}>
              <figure className="wow zoomIn">
                <img
                  src={item.image1}
                  style={{ width: "80px" }}
                  alt=""
                  className="banner-lamp"
                  loading="lazy"
                />
              </figure>
              <div className="container" key={index}>
                <div className="row">
                  <div className="col-lg-6">
                    <ol className="breadcrumb">
                      <li>
                        <h3>{item.title}</h3>
                      </li>
                    </ol>
                    <h3 className="all_banner_title">{item.detail}</h3>
                  </div>

                  <div
                    className="col-lg-6 banner_ai wow zoomIn "
                    data-wow-delay="0.4s"
                  >
                    <img src={item.image2} className="banner_art" alt="" loading="lazy"/>
                  </div>
                </div>
              </div>
            </section>

        );
      })}
    </div>
  );
}

export default Banner;
