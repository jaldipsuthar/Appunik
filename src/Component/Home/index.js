import React from "react";
import "./Home.css";
import HomeBanner from "./HomePages/HomeBanner";
import HomeService from "./HomePages/HomeServices";
import HomeAbout from "./HomePages/HomeAbout";
import HomeIntroducing from "./HomePages/HomeIntroducing";
import HomeDigitalAgency from "./HomePages/HomeDigitalAgency";
import HomeTestimonialArea from "./HomePages/HomeTestimonialArea";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>
            Top Web and Mobile Apps Development Company Ahmedabad, India
          </title>
          <meta
            name="description"
            content="AppUnik is  a top web,mobile app and Software development company based  in India & USA providing IT technology services & solutions to startups, enterprises."
          />

          <meta
            name="keyword"
            content="web development,web applications,web design,AppUnik,mobile app,website development company in india,home page"
          />
        </Helmet>
      </HelmetProvider>
      <HomeBanner />
      <HomeService />
      <HomeDigitalAgency />
      <HomeAbout />
      <HomeIntroducing />
      <HomeTestimonialArea />
    </div>
  );
}
export default Home;
