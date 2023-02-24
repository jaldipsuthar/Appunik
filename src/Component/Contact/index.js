import React from "react";
import ContactInfo from "./ContactPages/ContactInfo";
import ContactBannerArea from "./ContactPages/ContactBannerArea";
import "./Index.css";
import ContactForm from "./ContactPages/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Contact() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Contact Us | AppUnik</title>
          <meta
          name="description"
          content="Get in touch with us at AppUnik by visiting our contact page. Here you can find our phone number, email address, and a contact form to send us a message. We're always happy to hear from you!"
        />
        <meta name="keyword" content="contact"/>
        </Helmet>
      </HelmetProvider>
      <ContactBannerArea />
      <ContactInfo />
      <ContactForm />
      <div className="shap_style style_2">
        <span></span>
      </div>
    </div>
  );
}
export default Contact;
