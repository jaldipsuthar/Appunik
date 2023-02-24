import React from "react";
import ProjectBanner from "./ProjectPages/ProjectBanner";
import "./Project.css";
import ProjectSlider from "./ProjectPages/ProjectSlider";
import bg1 from "../../images/Project/Minte.png";
import bg2 from "../../images/Project/staver.png";
import mi from "../../images/Project/mi.png";
import mi2 from "../../images/Project/mi2.png";
import staver1 from "../../images/Project/staver1.png";
import staver2 from "../../images/Project/staver2.png";
import music from "../../images/Project/Music2.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Project() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>
            AppUnik Portfolio - Best web & Mobile Application Development
            Company
          </title>
          <meta name="description" content="Explore AppUnik’s success stories as we delivered software products of various complexity to companies across industries."/>
          <meta name="keyword" content="company portfolio,projects,web application,company portfolio"/>
        </Helmet>
      </HelmetProvider>
      <ProjectBanner />
      <ProjectSlider projectProvide={projectProvide} />
      <div className="shap_style style_2">
        <span></span>
      </div>
    </>
  );
}

export default Project;

const projectProvide = [
  {
    image: bg1,
    title: `Mintee`,
    text: `An education app that provides online and in-house learning chances with the best teachers from all over the world.`,
    sliderImages: [
      {
        image: mi,
        name: "Lorem ipsum",
      },
      {
        image: mi2,
        name: "Lorem ipsum",
      },
    ],
  },
  {
    image: bg2,
    title: `Staver`,
    text: `Staver is a project in which a user can go on to search for homes from different cities all over the world. Users can also search for events, they can invite friends, chat there, etc.`,
    sliderImages: [
      {
        image: staver1,
        name: "Lorem ipsum",
      },
      {
        image: staver2,
        name: "Lorem ipsum",
      },
    ],
  },
  {
    isBackground: true,
    title: `Tsaro`,
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
    eos et accusam et justo duo dolores et ea rebum.`,
    sliderImages: [
      {
        image: music,
        name: "Lorem ipsum",
      },
      {
        image: music,
        name: "Lorem ipsum",
      },
    ],
  },
  {
    isBackground: true,
    title: `Tail Tag`,
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
    eos et accusam et justo duo dolores et ea rebum.`,
    sliderImages: [
      {
        image: music,
        name: "Lorem ipsum",
      },
      {
        image: music,
        name: "Lorem ipsum",
      },
    ],
  },
];
