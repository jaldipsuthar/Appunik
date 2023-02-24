import React, { useState } from "react";
import { FaChair, FaBuffer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

function CareerOpning({ careers }) {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setValue(event);
    console.log(value);

    navigate("/Form", { state: { id: 1, newTitle: event } });

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  // if(window.matchMedia("(max-width:980px").matches){ }

  return (
    <section className="career_area pa_3 ">
      <div className="container">
        {careers &&
          careers.map((career, index) => {
            return (
              // <Parallax
              //   scale={[1.1, 0.8]}
              //   key={key}
              //   easing="easeInOut"
              //   speed={10}
              // >
              <div
                className={
                  "row " +
                  ((index + 1) % 2 === 0 ? "alignment " : "") +
                  "height"
                }
                key={career + Math.random() * 50}
                data-aos="zoom-out-up"
                data-aos-offset="150"
                data-aos-easing="ease-out-quart"
                data-aos-once="false"
              >
                <div className="col-md-4 ">
                  <img
                    src={career.image}
                    alt={career.imageInfo}
                    className="pt career_image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="opning_topbar">
                    <h4>{career.title}</h4>
                    <div className="opening_position_wrapper">
                      <div className="opning_position">
                        <FaChair />
                        <div className="opning_position_info">
                          <p>
                            No. of <br />
                            Openings:
                          </p>
                          {career.opening}
                        </div>
                      </div>
                      <div className="opning_position">
                        <FaBuffer />
                        <div className="opning_position_info">
                          <p>
                            Experience <br />
                            required:
                          </p>
                          {career.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="first_p mt-2">{career.details}</p>
                  <div className="career_area_appy-wrapper">
                    <button
                      className="theme_btn"
                      key={index}
                      onClick={() => handleClick(career.title)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              // </Parallax>
            );
          })}
      </div>
    </section>
  );
}

export default CareerOpning;
