import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

import Hero from "../Hero";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navLinks = {
    home: "Home",
    services: "Service",
    market: "Market",
    prices: "Pricing",
    blog: "Blog",
    contact: "Contact",
   '#': "Douc",
  };

  return (
    <>
      <section className=" relative flex flex-col w-full justify-between  text-black  hover:text-neutral-700  ">
      <nav className="  fixed top-0 left-0 flex z-50 w-full justify-between py-2 md:px-0  font-main font-bold text-lg lg:py-2">
         
          <div className=" pl-20 flex w-2/4  justify-start items-center">
            <NavLink className=" bg-white rounded-[8px]  px-6 py-3" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="24"
                viewBox="0 0 102 54"
                fill="none"
              >
                <path
                  d="M93.14 0C94.23 0.44 95.43 0.53 96.49 1.11C99.9 2.97 101.74 5.86 101.76 9.68C101.83 22.79 101.8 35.9 101.78 49C101.78 51.68 99.76 53.69 97.21 53.65C94.72 53.61 92.81 51.58 92.8 48.94C92.8 39.67 92.8 30.4 92.8 21.13C92.8 20.78 92.8 20.42 92.8 20.07C92.74 20.05 92.67 20.03 92.61 20.02C91.6 21.46 90.59 22.91 89.58 24.35C84.29 31.99 79.01 39.64 73.7 47.27C69.89 52.74 63.21 54.91 56.66 52.88C50.73 51.04 46.47 45.2 46.44 38.78C46.41 32.89 46.43 26.99 46.43 21.1C46.43 20.77 46.43 20.44 46.43 20.11C45.98 20.11 45.9 20.41 45.76 20.62C39.71 29.34 33.67 38.07 27.63 46.79C24.33 51.56 19.8 53.9 13.98 53.62C7.21 53.28 1.21 47.8 0.2 41.1C0.05 40.09 0 39.09 0 38.08C0 27.12 0 16.16 0 5.2C0 2.31 1.02 0.95 3.79 0.14C3.84 0.12 3.86 0.05 3.9 0C4.27 0 4.63 0 5 0C8.39 1.43 8.9 2.2 8.9 6.01C8.9 12.97 8.9 19.94 8.9 26.9C8.9 28.66 9.39 30.23 10.69 31.48C13.3 33.98 17.56 33.62 19.9 30.19C25.77 21.57 31.75 13.04 37.67 4.46C38.87 2.72 40.42 1.42 42.41 0.68C43.14 0.41 43.9 0.22 44.65 0C45.33 0 46 0 46.68 0C46.74 0.05 46.81 0.15 46.87 0.16C51.19 0.5 55.51 4.57 55.37 10.28C55.23 15.95 55.32 21.63 55.35 27.31C55.37 30.03 57.02 32.15 59.58 32.91C61.98 33.62 64.54 32.68 66.04 30.53C72 21.93 77.97 13.34 83.9 4.73C85.61 2.25 87.81 0.62 90.83 0.19C90.96 0.17 91.07 0.14 91.12 0.01C91.79 0 92.47 0 93.14 0Z"
                  fill="black"
                />
              </svg>
            </NavLink>
          </div>
          <div className="pr-20 z-10  flex w-2/4 items-center justify-end py-4 ">
            <span className="bg-white rounded-[8px]  px-8 py-3 mr-5 ">
              <NavLink to="https://wosom.ai/login" className="font-main font-bold hover:opacity-90">
                Sing up
              </NavLink>
            </span>
            <span className="bg-white rounded-[8px]  px-4 py-2 ">
              <button

                className=" flex justify-between items-center px-1 "
                onClick={handleNav}
              >
                {nav ? "Close   " : "Menu"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="36"
                  viewBox="0 0 41 41"
                  fill="none"
                  className={`ml-2 transition-transform duration-75 ${nav ?"transform rotate-45":""}`}
                >
                  <g clip-path="url(#clip0_470_211)">
                    <path
                      d="M41 20.5C41 31.8218 31.8218 41 20.5 41C9.17816 41 0 31.8218 0 20.5C0 9.17816 9.17816 0 20.5 0C31.8218 0 41 9.17816 41 20.5Z"
                      fill="black"
                    />
                    <path
                      d="M18 15.5C18 17.433 16.433 19 14.5 19C12.567 19 11 17.433 11 15.5C11 13.567 12.567 12 14.5 12C16.433 12 18 13.567 18 15.5Z"
                      fill="white"
                    />
                    <path
                      d="M30 15.5C30 17.433 28.433 19 26.5 19C24.567 19 23 17.433 23 15.5C23 13.567 24.567 12 26.5 12C28.433 12 30 13.567 30 15.5Z"
                      fill="white"
                    />
                    <path
                      d="M18 26.5C18 28.433 16.433 30 14.5 30C12.567 30 11 28.433 11 26.5C11 24.567 12.567 23 14.5 23C16.433 23 18 24.567 18 26.5Z"
                      fill="white"
                    />
                    <path
                      d="M30 26.5C30 28.433 28.433 30 26.5 30C24.567 30 23 28.433 23 26.5C23 24.567 24.567 23 26.5 23C28.433 23 30 24.567 30 26.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_470_211">
                      <rect width="41" height="41" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </span>
          </div>

          {nav && (
            <div
              className={`pt-20 pb-5 w-[292px] h-fit bg-[#adadad] rounded-2xl p-3 absolute  right-[68px] transition ease-in duration-[1s]	
              ${nav ? "  top-[2px]" : "top-[-1000px]"}
            `}
            >
              <div
                style={{ direction: "rtl" }}
                className="grid grid-cols-2 gap-x-4  gap-y-2 w-full text-center 	"
              >
                {Object.entries(navLinks).map(([key, value]) => (
                  <div className="bg-white  rounded-[8px]  px-8 py-3 ">
                    <HashLink 
                      to={`#${key}`}
                      className="font-main font-bold hover:opacity-90"
                    >
                      {value}
                    </HashLink >
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
       

        <Hero /> 
      </section>

        </>
  );
};

export default Header;
