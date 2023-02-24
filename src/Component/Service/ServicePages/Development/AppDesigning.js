import React from "react";
import img1 from "../../../../images/illustations/Portfolio 2.png";
import img2 from "../../../../images/illustations/Portfolio 1.png";
import Banner from "./../../../../shared/Banner/index";
import ServiceCounter from "../../../../shared/ServiceCounter/Index";
import icon1 from "../../../../images/icons/Icons.png";
import icon2 from "../../../../images/icons/Icons-1.png";
import icon3 from "../../../../images/icons/industry-40.png";
import icon4 from "../../../../images/icons/layer1.png";
import icon5 from "../../../../images/icons/on-time.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
function AppDesigning() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>
          Creative UI/UX Web Design Service | AppUnik
          </title>
          <meta
            name="description"
            content="At our company, we specialize in providing top-notch UI/UX web design services to help businesses create a stunning and user-friendly online presence. Our team of experts uses cutting-edge techniques and tools to design visually appealing and intuitive websites that drive conversions and enhance the user experience."
          />
          <meta
            name="keyword"
            content="ui ux design company , ui ux ,graphic design,best graphic design company
            best UI / UX Design company,"
          />
        </Helmet>
      </HelmetProvider>
      <Banner banner={banner} />
      <ServiceCounter counters={counters} />
    </>
  );
}

export default AppDesigning;
const banner = [
  {
    image1: img1,
    title: `UX/UI Designing
`,
    detail: ``,
    image2: img2,
  },
];
const counters = [
  {
    title: ` `,
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
