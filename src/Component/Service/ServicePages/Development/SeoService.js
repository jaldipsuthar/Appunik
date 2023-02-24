import React from "react";
import Banner from "../../../../shared/Banner";
import img1 from "../../../../images/illustations/Portfolio 2.png";
import img2 from "../../../../images/illustations/Portfolio 1.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
function SeoService() {
  const helmetContext={};
  return (
    <>
    <HelmetProvider context={helmetContext}>
    <Helmet>
    <title>
    Top SEO and Digital Marketing Services | AppUnik
    </title>
    <meta name="description" content="Our SEO and digital marketing services help businesses increase their online visibility and drive more traffic to their website. From keyword research to content creation and social media management, our team of experts will develop a customized strategy to help your company reach its digital marketing goals."></meta>
    <meta name="keyword" content="Best SEO Services In India,seo digital marketing,digital marketing,online marketing,
    digital marketing company,digital marketing services,seo,seo services,backlinks,seo marketing"></meta>
    </Helmet>
    </HelmetProvider>
      <Banner banner={banner} />
    </>
  );
}

export default SeoService;

const banner = [
  {
    image1: img1,
    title: `SEO and Digital Marketing
`,
    detail: ``,
    image2: img2,
  },
];
