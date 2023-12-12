import React from "react";
import { NavLink } from "react-router-dom";

const MoblieLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-3xl">
      <h1> Moblie Layout</h1>
      <div className="clear"></div>
      <ul className="mt-8">
        <li className="text-blue-800 underline">
          <NavLink to="/header-m">header</NavLink>
        </li>
        <li className="text-blue-800 underline">
          <NavLink to="/footer-m">footer</NavLink>
        </li>
        <li className="text-blue-800 underline">
          <NavLink to="/partners-m">Partners</NavLink>
        </li>
        <li className="text-blue-800 underline">
          <NavLink to="/features-m">Features</NavLink>
        </li>
        <li className="text-blue-800 underline">
          <NavLink to="/services-m">Services</NavLink>
        </li>
        <li className="text-blue-800 underline">
          <NavLink to="/prices-m">Prices</NavLink>
        </li>
        <li className="text-blue-800 underline">
            <NavLink to="/contact-m">Contact   </NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/faq-m">FAQ   </NavLink>
          </li>
          <li className="text-blue-800 underline">
            <NavLink to="/articles-m"> Articles</NavLink>
          </li>
      </ul>
    </div>
  );
};

export default MoblieLayout;
