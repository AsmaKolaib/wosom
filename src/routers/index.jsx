import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Prices from "../components/Prices";
import Articles from "../components/Articles";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Header from "../components/Header";

import Partners from "../components/Partners/index";
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
      {/* <Route path="/login" element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
