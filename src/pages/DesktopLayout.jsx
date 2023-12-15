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
const DesktopLayout = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col px-0 lg:px-10">
        <Header />
        <div className="py-20">
          <Partners />
        </div>
        <div className="py-20">
          <Features />
        </div>
        <div className="py-20">
          <Services />
        </div>
        <div className="pb-20">
          <Prices />
        </div>
        <div className="py-20">
          <Articles />
        </div>
        <div className="py-20">
          <FAQ />
        </div>
        <div className="py-20 ">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DesktopLayout;
