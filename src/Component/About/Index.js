import React from "react";
import AboutBanner from "./AboutPages/AboutBanner";
import "./About.css";
import AboutStory from "./AboutPages/AboutStory";
import AboutProject from "./AboutPages/AboutProject";
import AboutWork from "./AboutPages/AboutWork";
import AboutVision from "./AboutPages/AboutVision";
import AboutTechnology from "./AboutPages/AboutTechnology";
import icon from "../../images/blog/coment-1.png";
import discover from "../../images/illustations/Discover.png";
import design from "../../images/illustations/Design.png";
import build from "../../images/illustations/Build.png";
import deliver from "../../images/illustations/Deliver.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

function About() {
  const helmetContext = {};

  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>About | AppUnik</title>
          <meta
            name="description"
            content="Custom app development company - AppUnik offers custom application development services for web, mobile app & Cloud solutions."
          />
          <meta name="keyword" content="about" />
        </Helmet>
      </HelmetProvider>
      <AboutBanner />
      <AboutStory />
      <AboutWork works={works} />
      <AboutProject />
      <AboutVision />
      <AboutTechnology />
      <div className="shap_style style_2">
        <span></span>
      </div>
    </div>
  );
}
export default About;

const works = [
  {
    icon: icon,
    title: `Discover`,
    detail: `Understanding your business needs to delivering innovative IT solutions for your success.
    `,
    image: discover,
  },
  {
    icon: icon,
    title: `Design`,
    detail: `Designing bespoke IT solutions tailored to your business needs, our team of experts deliver results that drive your success.
    `,
    image: design,
    imageInfo: `Design vector image`,
  },
  {
    icon: icon,
    title: `Build`,
    detail: `Building innovative IT solutions with precision and expertise, our team delivers results that drive your business forward.`,
    image: build,
    imageInfo: `Build vector image`,
  },
  {
    icon: icon,
    title: `Deliver`,
    detail: `Delivering cutting-edge IT solutions that drive your business forward, our team ensures successful implementation and ongoing support.`,
    image: deliver,
    imageInfo: `Deliver vector image`,
  },
];
