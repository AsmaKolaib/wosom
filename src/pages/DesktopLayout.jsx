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
      <Header />
      <Partners />
      <Features />
      <Services />
      <Prices />
      <Articles />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );

  // return ;
};

export default DesktopLayout;
