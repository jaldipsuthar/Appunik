import React, { useEffect } from "react";
import "../../css/globelcss.css";
import "./career.css";
import job from "../../images/job/Job-Career.jpg";
import job2 from "../../images/job/job2-Career.jpg";
import Careerpages from "./careerpages/CareerBanner";
import CareerOpning from "./careerpages/CareerOpning";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Career() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Career | AppUnik</title>
          <meta
            name="description"
            content="Explore exciting career opportunities at our company and join a team of dedicated professionals working towards a common goal. Apply now to be a part of our dynamic and innovative workforce."
          />
          <meta
            name="keyword"
            content="Hiring,Hire developer,hire web developer,Hire Dedicated Developers India"
          />
        </Helmet>
      </HelmetProvider>
      <Careerpages />
      <CareerOpning careers={careers} />

      <div className="shap_style style_2">
        <span></span>
      </div>
      {/*Experience*/}
    </div>
  );
}

export default Career;

const careers = [
  {
    image: job,
    imageInfo: `ios image`,
    title: `IOS Devloper`,
    opening: ` 1`,
    experience: ` 1 to 2 years`,
    details: `We are seeking a highly skilled and motivated individual to join our team and play a key role in designing, developing, and maintaining cutting-edge technology solutions for our clients.`,
  },
  {
    image: job2,
    imageInfo: `Dot Net image`,
    title: `Dot Net Devloper`,
    opening: ` 1`,
    experience: ` 1 to 2 years`,
    details: `We are seeking a highly skilled and motivated individual to join our team and play a key role in designing, developing, and maintaining cutting-edge technology solutions for our clients.
    `,
  },
];
