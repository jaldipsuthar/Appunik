import React from "react";
import Banner from "../../../../shared/Banner";
import img1 from "../../../../images/illustations/Portfolio 2.png";
import img2 from "../../../../images/illustations/Portfolio 1.png";
import icon1 from "../../../../images/icons/Icons.png";
import icon2 from "../../../../images/icons/Icons-1.png";
import icon3 from "../../../../images/icons/industry-40.png";
import icon4 from "../../../../images/icons/layer1.png";
import icon5 from "../../../../images/icons/on-time.png";
import ServiceCounter from "../../../../shared/ServiceCounter/Index";
import { Helmet, HelmetProvider } from "react-helmet-async";
function ECommerceDevlopment() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>
            Ecommerce Website Development Services | Shopify Development
          </title>
          <meta
            name="description"
            content="Looking for professional ecommerce website development services? Our company specializes in creating custom online stores tailored to your specific needs. From design to functionality, we'll help you take your business to the next level"
          />
          <meta
            name="keyword"
            content="shopify dev,Top Ecommerce Platforms,eCommerce Development Services,ecommerce platform"
          />
        </Helmet>
      </HelmetProvider>
      <Banner banner={banner} />
      <ServiceCounter counters={counters} />
    </div>
  );
}

export default ECommerceDevlopment;
const banner = [
  {
    image1: img1,
    title: `ECommerce/WooCommerce Shopify Development`,
    detail: ``,
    image2: img2,
  },
];

const counters = [
  {
    title: `Custom E-Commerce Solutions For Every Buisness Model`,
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
