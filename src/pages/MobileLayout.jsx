import React ,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const AnimatedComponent = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    let timeoutId;
    if (inView) {
      timeoutId = setTimeout(() => {
        controls.start("visible");
      }, delay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
const MoblieLayout = () => {
  return (
    <>
      <ScrollToTop />
      <AnimatedComponent delay={100}>
        <Header />
      </AnimatedComponent>
      <div className="container mx-auto">
        <div className="py-10">
          <AnimatedComponent delay={300}>
            <Partners />
          </AnimatedComponent>
        </div>
        <div id="market" className="py-10">
          <AnimatedComponent delay={500}>
            <Features />
          </AnimatedComponent>
        </div>
        <div id="services" className="py-10">
          <AnimatedComponent delay={700}>
            <Services />
          </AnimatedComponent>
        </div>
        <div id="prices" className="py-10">
          <AnimatedComponent delay={900}>
            <Prices />
          </AnimatedComponent>
        </div>
        <div id="blog">
          <AnimatedComponent delay={950}>
            <Articles />
          </AnimatedComponent>
        </div>
        <AnimatedComponent delay={1000}>
          <FAQ />
        </AnimatedComponent>
        <div id="Contact" className="py-10">
          <AnimatedComponent delay={1000}>
            <Contact />
          </AnimatedComponent>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoblieLayout;
