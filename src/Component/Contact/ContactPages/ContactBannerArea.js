import React from "react";
import illustration from "../../../images/illustations/Contact 1.png";
import illustration2 from "../../../images/illustations/Contact.png";
import { Parallax } from "react-scroll-parallax";
import AOS from 'aos';
import 'aos/dist/aos.css';
function ContactBannerArea() {
  // const [opacity, setOpacity] = useState(1);
  // const [zoom, setZoom] = useState(1);
  // const ref = useRef(null);
  // // document.addEventListener("scroll", function() {
  // //   console.log("scroll!")
  // // });
  // useEffect(() => {
  //   function handleScroll() {
  //     // const scrollY = window.scrollY;
  //     // console.log(scrollY);
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
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    // <Parallax scale={[1.1, 0.8]} easing="easeInOut" speed={10}>
      <section
        className="pages_banner banner_area"
  
        // ref={ref}
        // style={{
        //   opacity,
        //   transform: `scale(${zoom})`,
        //   transition: "transform 0.2s easy",
        // }}
      >
  
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ol className="breadcrumb">
                <li>
                  <h2>Contact</h2>
                </li>
              </ol>
              <h3 className="projectbanner_title">
                Let's Discuss Your IT Needs : Get in touch with our team of
                experts and see how we can drive your business forward
              </h3>
              <figure className="wow zoomIn">
              <img
                src={illustration}
                style={{ width: "60px" }}
                alt=""
                className="banner-lamp"
              />
            </figure>
            </div>

            <div
              className="col-lg-6 banner_ai wow zoomIn "
              data-wow-delay="0.4s"
            >
              <img
                src={illustration2}
                className="portofolio_art"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    // </Parallax>
  );
}

export default ContactBannerArea;
