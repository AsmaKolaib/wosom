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

const MoblieLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Partners />
        <Features />
        <Services />
        <Prices />
        <Articles />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default MoblieLayout;
