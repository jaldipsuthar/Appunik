import React from "react";
import Banner from "../../../../shared/Banner";
import img2 from "../../../../images/illustations/Portfolio 2.png";
import img1 from "../../../../images/illustations/Portfolio 1.png";
import ServiceCounter from './../../../../shared/ServiceCounter/Index';
import icon1 from "../../../../images/icons/Icons.png";
import icon2 from "../../../../images/icons/Icons-1.png";
import icon3 from "../../../../images/icons/industry-40.png";
import icon4 from "../../../../images/icons/layer1.png";
import icon5 from "../../../../images/icons/on-time.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
function WebsiteDevelopment() {
  const helmetContext ={};
  return (
    <>
    <HelmetProvider context={helmetContext}>
    <Helmet>
      <title>Web Development Services </title>
      <meta
        name="description"
        content="Elevate your online presence with our professional website development services. Our team of expert designers and developers create SEO-friendly websites that drive traffic and convert visitors into customers. Trust us to create a website that reflects your brand and meets your business needs."
      />
      <meta
        name="keyword"
        content="web development,web development service,web development company,top web development company"
      />
    </Helmet>
  </HelmetProvider>
      <Banner banner={banner} />
      <ServiceCounter counters={counters}/>
    </>
  );
}

export default WebsiteDevelopment;

const banner = [
  {
    image1: img2,
    title: `Website Development
`,
    detail: ``,
    image2: img1,
  },
];
const counters =[{
  title:`Custom Web-Design Solutions For Every Buisness Model  `,
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