import React, { useState, useEffect } from "react";
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
      </ul>
    </div>
  );
};

export default MoblieLayout;
