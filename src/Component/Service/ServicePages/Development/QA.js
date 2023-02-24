import React from "react";
import Banner from "../../../../shared/Banner";
import img1 from "../../../../images/illustations/Portfolio 2.png";
import img2 from "../../../../images/illustations/Portfolio 1.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
function QA() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>
            Top Web and Mobile Apps Development Company Ahmedabad, India
          </title>
          <meta
            name="description"
            content="Our software testing and QA services ensure that your software is thoroughly tested and meets the highest standards of quality. We provide comprehensive testing services including functional, performance, and security testing to ensure that your software is reliable and user-friendly"
          />
          <meta
            name="keyword"
            content="qa testing,software tester,automation testing services,Best Software Testing Companies,quality assurance
      manual tester"
          />
        </Helmet>
      </HelmetProvider>
      <Banner banner={banner} />
    </>
  );
}

export default QA;
const banner = [
  {
    image1: img1,
    title: `Quality Assurance  `,
    detail: ``,
    image2: img2,
  },
];
