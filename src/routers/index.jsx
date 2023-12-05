import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Prices from "../components/Prices";
import Articles from "../components/Articles";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/prices" element={<Prices />} />
      <Route path="/articles" element={<Articles />} />
      {/* <Route path="/login" element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
