import React from "react";
import "./service.css";
import ServiceBanner from "./ServicePages/ServiceBanner";
import ServicePanel from "./ServicePages/ServicePanel";
import img1 from "../../images/illustations/app-development-banner_33099-1720.webp";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Service() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>#1 App Development Service | Appunik</title>
          <meta
            name="description"
            content="Our app development service offers professional and personalized solutions for businesses and individuals. From concept to launch, we create user-friendly apps for various platforms including iOS and Android. Trust us to bring your ideas to life with our skilled team of developers and designers."
          />
          <meta
            name="keyword"
            content="services,mobile app,website,web designer,web development"
          />
        </Helmet>
      </HelmetProvider>
      <ServiceBanner />
      <ServicePanel panels={panels} />
      <div className="shap_style style_2">
        <span></span>
      </div>
    </>
  );
}

export default Service;

const panels = [
  {
    image: img1,
    title: `Mobile App Development `,
    info1: `Native iOS App Development`,
    info2: `Native Android App Development`,
    info3: `Cross-platform App Development`,
    info4: `React Native App Development`,
    info5: `Flutter App Develop`,
    to: "/AppDevelopment",
  },
  {
    image: img1,
    title: ` Website Development`,
    info1: `Web Design`,
    info2: `Custom Web Development`,
    info3: `Third-Party Integrations`,
    info4: `Quality Assurance`,
    info5: `Maintenance & Support`,
    to: "/WebsiteDevelopment",
  },
  {
    image: img1,
    title: `ECommerce/WooCommerce  Shopify Development`,
    info1: `Enterprise Level Ecommerce`,
    info2: `Multiple Business Models`,
    info3: `E-commerce Product Marketplace`,
    info4: `Multi-Vendor E-commerce Development`,
    info5: `SEO Friendly`,
    to: "/ECommerceDevlopment",
  },
  {
    image: img1,
    title: `Hybrid App Development `,
    info1: `Web Design`,
    info2: `Custom Web Development`,
    info3: `Third-Party Integrations`,
    info4: `Quality Assurance`,
    info5: `Maintenance & Support`,
    to: "/HybridAppDevlopment",
  },
  {
    image: img1,
    title: ` UI UX Designing `,
    info1: `Wireframes Designing`,
    info2: `UI Design`,
    info3: `Mobile App Design`,
    info4: `Responsive Web Design`,
    info5: `Information Architecture`,
    to: "/AppDesigning",
  },
  {
    image: img1,
    title: `BlockChain / NFT Development `,
    info1: `Web Design`,
    info2: `Custom Web Development`,
    info3: `Third-Party Integrations`,
    info4: `Quality Assurance`,
    info5: `Maintenance & Support`,
    to: "/BlockChainDevlopment",
  },
  {
    image: img1,
    title: `SEO and Digital Marketing`,
    info1: `Web Design`,
    info2: `Custom Web Development`,
    info3: `Third-Party Integrations`,
    info4: `Quality Assurance`,
    info5: `Maintenance & Suppoyrt`,
    to: "/SeoService",
  },
  {
    image: img1,
    title: `QA `,
    info1: `Web Design`,
    info2: `Custom Web Development`,
    info3: `Third-Party Integrations`,
    info4: `Quality Assurance`,
    info5: `Maintenance & Support`,
    to: "/QA",
  },
];
