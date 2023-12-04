import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-3xl">
      <h1> Home page</h1>
      <div className="clear"></div>
      <ul className="mt-8">
        <li className="text-blue-800 underline">
          {" "}
          <NavLink to="/prices">Price Plan Section</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
