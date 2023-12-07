import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Prices from "../components/Prices";
import Articles from "../components/Articles";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/prices" element={<Prices />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/footer" element={<Footer />} />
      {/* <Route path="/login" element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
