import React, { useState, useEffect } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  return width < breakpoint ? <MobileLayout /> : <DesktopLayout />;
};

export default Home;
