import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Prices from "../components/Prices";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/prices" element={<Prices />} />

      {/* <Route path="/login" element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
