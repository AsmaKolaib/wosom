import React from "react";
import Header from "../components/Header/index-m";
import Partners from "../components/Partners/index-m";
import Features from "../components/Features/index-m";
import Services from "../components/Services/index-m";
import Prices from "../components/Prices/index-m";
import Articles from "../components/Articles/index-m";
import FAQ from "../components/FAQ/index-m";
import Contact from "../components/Contact/index-m";
import Footer from "../components/Footer/index-m";
import ScrollToTop from "../components/Button/to-up";
const MoblieLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="container mx-auto">
        <div className="py-10">
          <Partners />
        </div>
        <div id="market" className="py-10">
          <Features />
        </div>
        <div id="services" className="py-10">
          <Services />
        </div>
        <div id="prices" className="py-10">
          <Prices />
        </div>
        <div id="blog">
          <Articles />
        </div>
        <FAQ />
        <div id="Contact" className="py-10">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoblieLayout;
