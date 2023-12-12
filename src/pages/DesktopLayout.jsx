import React from "react";
import { NavLink } from "react-router-dom";

const DesktopLayout = () => {


  return (
      <div className="flex flex-col justify-center items-center h-screen text-3xl">
        <h1> Desktop Layout</h1>
        <div className="clear"></div>
        <ul className="mt-8">
          <li className="text-blue-800 underline">
            <NavLink to="/prices">Price Plan Section</NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/articles"> Articles</NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/footer">footer</NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/contact-us">Contact us section </NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/header">header</NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/partners">partners</NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/features">Features</NavLink>
          </li>
        </ul>
      </div>
   );

  // return ;
};

export default DesktopLayout;
