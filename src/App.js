import "./App.css";
import React, { useEffect } from "react";
import Header from "./Component/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UseEffectScroll } from "react-use-smooth-scroll";
import Home from "./Component/Home/index";
import Contact from "./Component/Contact/index";
import Career from "./Component/Career/index";
import Project from "./Component/Project/Index";
import About from "./Component/About/Index";
import Footer from "./Component/Footer/Index";
import TopScroll from "./Component/ScrollTop/TopScrollButton";
import WOW from "wowjs";
import "./css/globelcss.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Service from "./Component/Service";
import AppDevelopment from "./Component/Service/ServicePages/Development/AppDevelopment";
import WebsiteDevelopment from "./Component/Service/ServicePages/Development/WebsiteDevelopment";
import ContactForm from "./Component/Contact/ContactPages/ContactForm";
import Form from "./Component/Applyform/Form";
import ECommerceDevlopment from "./Component/Service/ServicePages/Development/ECommerceDevlopment";
import HybridAppDevlopment from "./Component/Service/ServicePages/Development/HybridAppDevlopment";
import AppDesigning from "./Component/Service/ServicePages/Development/AppDesigning";
import BlockChainDevlopment from "./Component/Service/ServicePages/Development/BlockChainDevlopment";
import SeoService from "./Component/Service/ServicePages/Development/SeoService";
import QA from "./Component/Service/ServicePages/Development/QA";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      AOS.init({
        duration: 1000,
        debounceDelay: 0,
        once: false,
        mirror: true,
        disable: function() {
          var maxWidth = 980;
          return window.innerWidth < maxWidth;
        }
      });
    });
    // document.body.style.overflow = "hidden";
    
  }, []);
  

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     new WOW.WOW({
  //       live: false,
  //     }).init();
  //   });
  // }, []);

  return (
    <ParallaxProvider>
      <UseEffectScroll>
        <Router>
        <TopScroll />
          <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Project" element={<Project />} />
            <Route exact path="/Career" element={<Career />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Service" element={<Service />} />
            <Route path="/AppDevelopment" element={<AppDevelopment />}></Route>
            <Route
              path="/WebsiteDevelopment"
              element={<WebsiteDevelopment />}
            ></Route>
            <Route
              path="/ECommerceDevlopment"
              element={<ECommerceDevlopment />}
            ></Route>
            <Route
              path="/HybridAppDevlopment"
              element={<HybridAppDevlopment />}
            ></Route>
            <Route path="/AppDesigning" element={<AppDesigning />}></Route>
            <Route
              path="/BlockChainDevlopment"
              element={<BlockChainDevlopment />}
            ></Route>
            <Route path="/SeoService" element={<SeoService />}></Route>
            <Route path="/QA" element={<QA />}></Route>
            <Route path="ContactForm" element={<ContactForm />}></Route>
            <Route exact path="Form" element={<Form />} />
          </Routes>
          <Footer />
 
        </Router>
        
      </UseEffectScroll>
    </ParallaxProvider>
  );
}

export default App;
