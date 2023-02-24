import React from "react";
import Banner from "../../../../shared/Banner";
import img1 from "../../../../images/illustations/Portfolio 2.png";
import img2 from "../../../../images/illustations/Portfolio 1.png";
import ServiceCounter from "../../../../shared/ServiceCounter/Index";
import icon1 from "../../../../images/icons/Icons.png";
import icon2 from "../../../../images/icons/Icons-1.png";
import icon3 from "../../../../images/icons/industry-40.png";
import icon4 from "../../../../images/icons/layer1.png";
import icon5 from "../../../../images/icons/on-time.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function BlockChainDevlopment() {
  const helmetContext = {};

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>
          Blockchain App Development Services | Top Blockchain Development Company
          </title>
          <meta
            name="description"
            content="Looking for top-quality blockchain app development services? Look no further! Our team of expert developers specializes in creating secure and scalable blockchain-based and nft based applications for businesses and organizations of all sizes"
          />
          <meta
            name="keyword"
            content="nft marketplace development,nft,blockchain,nft development company
            NFT service provider,blockchain services provider
            blockchain development company,blockchain technology"
          />
        </Helmet>
      </HelmetProvider>
      <Banner banner={banner} />
      <ServiceCounter counters={counters} />
    </>
  );
}

const banner = [
  {
    image1: img1,
    title: `BlockChainDevlopment
`,
    detail: ``,
    image2: img2,
  },
];
const counters = [
  {
    title: ``,
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
