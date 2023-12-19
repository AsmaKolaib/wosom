import React from "react";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Features from "../components/Features";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Articles from "../components/Articles";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/Button/to-up";
const DesktopLayout = () => {
  return (
    <>
    <ScrollToTop/>
      <div id="home" className="container mx-auto flex flex-col px-0 lg:px-10">
        <Header />
        <div className="py-20">
          <Partners />
        </div>
        <div id="market" className="py-20">
          <Features />
        </div>
        <div  id="services" className="py-20">
          <Services />
        </div>
        <div id="prices" className="pb-20">
          <Prices />
        </div>
        <div id="blog" className="py-20">
          <Articles />
        </div>
        <div className="py-20">
          <FAQ />
        </div>
        <div  id="contact" className="py-20 ">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DesktopLayout;
