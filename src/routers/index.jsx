import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Prices from "../components/Prices";
import Articles from "../components/Articles";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Services from "../components/Services";
import Partners from "../components/Partners/index";
import Features from "../components/Features";


import HeaderM from "../components/Header/index-m";
import FooterM from "../components/Footer/index-m";
import PartnersM from "../components/Partners/index-m";
import FeaturesM from "../components/Features/index-m";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/prices" element={<Prices />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="/header" element={<Header/>} />
      <Route path="/partners" element={<Partners/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/features" element={<Features/>} />

      <Route path="/header-m" element={<HeaderM/>} />
      <Route path="/footer-m" element={<FooterM/>} />
      <Route path="/partners-m" element={<PartnersM/>} />
      <Route path="/features-m" element={<FeaturesM/>} />
      {/* <Route path="/login" element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
