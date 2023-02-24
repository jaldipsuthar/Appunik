import React from "react";
import Banner from "../../../../shared/Banner";
import img1 from "../../../../images/illustations/Portfolio 2.png";
import img2 from "../../../../images/illustations/Portfolio 1.png";
import AppDevelopmentDetails from "./MobileAppDevlopment/AppDevlopmentDetails";
import "./mobileappDevlopment.css";
import ServiceCounter from "./../../../../shared/ServiceCounter/Index";
import icon1 from "../../../../images/icons/Icons.png";
import icon2 from "../../../../images/icons/Icons-1.png";
import icon3 from "../../../../images/icons/industry-40.png";
import icon4 from "../../../../images/icons/layer1.png";
import icon5 from "../../../../images/icons/on-time.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
function AppDevlopment() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Mobile App Development Services</title>
          <meta
            name="description"
            content="Looking for a reliable and experienced mobile app development company? Look no further! Our team at AppUnikspecializes in creating high-quality and user-friendly mobile apps for businesses of all sizes. "
          />
          <meta
            name="keyword"
            content="app development ,mobile app development ,ios mobile app development
            Top Mobile App Development Companies,top mobile app developers"
          />
        </Helmet>
      </HelmetProvider>
      <Banner banner={banner} />
      <ServiceCounter counters={counters} />
      <AppDevelopmentDetails />
    </>
  );
}

export default AppDevlopment;
const banner = [
  {
    image1: img1,
    title: `Mobile App Development`,
    detail: ``,
    image2: img2,
  },
];
const counters = [
  {
    title: `Custom Mobile-App Solutions For Every  Buisness Models`,
    image1: icon1,
    image2: icon2,
    image3: icon3,
    image4: icon4,
    image5: icon5,
    value1: `5+`,
    value2: `100%`,
    value3: `5+`,
    value4: `10+`,
    value5: `90%`,
    info1: `Year of Experience`,
    info2: `Client Satisfaction`,
    info3: `Developed Mobile App`,
    info4: `Industries Served`,
    info5: `On-Time Delivery`,
  },
];
