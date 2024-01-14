import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Features from "../components/Features";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Articles from "../components/Articles";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


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
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    >
      {children}
    </motion.div>
  );
};

const DesktopLayout = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <AnimatedComponent  delay={100}>
       <div id="home">
       <Header />
       </div>
        </AnimatedComponent>
      <div className="container mx-auto flex flex-col px-0 lg:px-10 ">

        <div className="py-10" >
          <AnimatedComponent delay={300}>
            <Partners />
          </AnimatedComponent>
        </div>
        <div  id="market" className="py-10">
          <AnimatedComponent delay={500}>
            <Features />
          </AnimatedComponent>
        </div>
        <div  id="services"  className="py-10">
          <AnimatedComponent delay={700}>
            <Services />
          </AnimatedComponent>
        </div>
        <div id="prices" className="py-10 pb-5">
          <AnimatedComponent delay={900}>
            <Prices />
          </AnimatedComponent>
        </div>
        <div id="blog" className="py-10">
          <AnimatedComponent delay={950}>
            <Articles />
          </AnimatedComponent>
        </div>
        <div className="py-10">
          <AnimatedComponent delay={1000}>
            <FAQ />
          </AnimatedComponent>
        </div>
        <div id="contact" className="py-10">
          <AnimatedComponent delay={1000}>
            <Contact />
          </AnimatedComponent>
        </div>
      </div>
 
      <Footer />
         

    </>
  );
};

export default DesktopLayout;
