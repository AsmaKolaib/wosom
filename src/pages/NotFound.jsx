import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
const NotFound = () => {
  return (
    <div
      class="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  "
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <NavLink to="/">
            <Button
              text=" Go Home"
              bgColor="bg-[#ededed]"
              textColor="text-black"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
