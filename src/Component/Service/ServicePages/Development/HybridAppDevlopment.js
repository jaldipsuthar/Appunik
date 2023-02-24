import React from 'react'
import Banner from '../../../../shared/Banner'
import img1 from "../../../../images/illustations/Portfolio 2.png";
import img2 from "../../../../images/illustations/Portfolio 1.png";
import ServiceCounter from '../../../../shared/ServiceCounter/Index';
import icon1 from "../../../../images/icons/Icons.png";
import icon2 from "../../../../images/icons/Icons-1.png";
import icon3 from "../../../../images/icons/industry-40.png";
import icon4 from "../../../../images/icons/layer1.png";
import icon5 from "../../../../images/icons/on-time.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
function HybridAppDevlopment() {
  const helmetContext = {};
  return (
    <>
    <HelmetProvider context={helmetContext}>
    <Helmet>
      <title>
     Hybrid Mobile App Development Company | Hybrid Mobile App Developer
      </title>
      <meta
        name="description"
        content="Our company offers professional hybrid mobile app development services to help businesses enhance their digital presence and reach more customers. We specialize in creating user-friendly and high-performing apps for iOS and Android platforms using cutting-edge technologies such as React Native and Xamarin"
      />
      <meta name="keyword" content="hybrid app development company, hybrid application development services, hybrid app developers, custom software development, Software development, custom software, application development"/>
    </Helmet>
  </HelmetProvider>
    <Banner banner={banner} />
    <ServiceCounter counters={counters}/>
    </>
  )
}

export default HybridAppDevlopment

const banner = [
  {
    image1: img1,
    title: `Hybrid App Development
`,
    detail: ``,
    image2: img2,
  },
];

const counters =[{
  title:``,
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
}]