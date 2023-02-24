/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
function ContactInfo() {
  // const [opacity, setOpacity] = useState(1);
  // const [zoom, setZoom] = useState(1);
  // const ref = useRef(null);

  // useEffect(() => {
  //   function handleScroll() {
      
  //     const top =ref.current.getBoundingClientRect().top;
  //     // console.log(top);
  //     if (top < 0) {
  //       setOpacity(1 + top / 600);
  //       setZoom(1 + top / 2000);
  //     } else if (top > 0  )  {
  //       setOpacity(1 + top / 3000);
  //       setZoom(1 + top / 3000);
  //     } else {
  //       setOpacity(1);
  //       setZoom(1);
  //     }
  //     if(window.matchMedia("(max-width: 600px)").matches){
  //       setZoom(1)
  //       setOpacity(1)
  //     }
  //     // console.log(top);   
  //     // if(window.matchMedia("(max-width:980px").matches){
  //     //   setZoom(1.1)
  //     //   setOpacity(1)
  //     // }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const [scale, setScale] = useState(1);
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [transform, setTransform] = useState("translateY(0px)");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //     if (scrollTop > lastScrollTop) {
  //       setScale(0.8);
       
  //     } else {
  //       setScale(1);
       
  //     }
  //     setLastScrollTop(scrollTop);
  //   };

  //   window.addEventListener("wheel", handleScroll);
  //   return () => window.removeEventListener("wheel", handleScroll);
  // }, [lastScrollTop]);

  
  return (
    // <Parallax  scale={[1.1, 0.8]}  easing="easeInOut" speed={10} >
      <section
        className="contact_info"
        // style={{
        //   transform: `scale(${scale})`,
        //   transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
        // }}
        data-aos="zoom-out-up"
        data-aos-offset="150"
        data-aos-easing="ease-out-quart"
        data-aos-once="false"
      >
        <div className="shap_style ss_2 wow zoomIn">
          <span></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-2">
              <div className="info_container">
                <div className="info">
                  <div className="icons">
                    <i className="flaticon-customer-service cc"></i>
                  </div>
                  <h4>Contact Number</h4>
                  <a href="/">+91 7435047427</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-2">
              <div className="info_container">
                <div className="info">
                  <div className="icons">
                    <i className="flaticon-paper-plane"></i>
                  </div>
                  <h4>Email address</h4>
                  <a href="/">info@appunik.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-2">
              <div className="info_container">
                <div className="info">
                  <div className="icons">
                    <i className="flaticon-route"></i>
                  </div>
                  <h4>Office Location</h4>
                  <a href="/">
                    C 1103, Titanium City Center, Prahladnagar, Ahmadabad,
                    Gujarat-380015
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    // </Parallax>
  );
}
export default ContactInfo;
