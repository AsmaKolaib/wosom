import React from "react";
import logo from "../../assets/imags/logo.png";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../components/Button/to-up";
const index = () => {
  const links = {
    "service": "Service",
    "features": "Features",
    " market": " Market",
    "pricing": "Pricing",
    " blog": " blog",
    " contact": " contact",
  };
  return (

    <footer className="relative bg-black text-[#D2D2D2]  pt-8 pb-6 mt-5 h-fit">
        <ScrollToTop />
      <div className="container mx-auto ">
        <div className="px-8">
          <img src={logo} alt="Wosom" width={80} height={0} />
        </div>
        <div className="flex flex-wrap text-left px-8">
          <div className="w-full  ">
            <p className="text-lg mt-4  ">
              We save time, money, and resources by automating processes that
              are tedious and prone to errors
            </p>
          </div>
          <div className="w-full  px-4 mt-8 ">
            <div className="flex items-top mb-6">
              <div className="w-full px-0  capitalize">
                <ul className="list-unstyled">
                  {Object.entries(links)
                    .filter((i, index) => index < 3)
                    .map(([key, value]) => (
                      <li>
                        <NavLink
                          to="#"
                          className=" hover:text-[#BBBBBB] font-semibold block pb-2 text-sm"
                        >
                          {value}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="w-full  px-4 capitalize">
                <ul className="list-unstyled">
                  {Object.entries(links)
                    .filter((i, index) => index > 2)
                    .map(([key, value]) => (
                      <li>
                        <NavLink
                          to="#"
                          className=" hover:text-[#BBBBBB] font-semibold block pb-2 text-sm"
                        >
                          {value}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#343333]" />
        <div className="flex justify-between px-4 ">
          <div className="w-full md:w-4/12 px-4 ">
          <div className="flex justify-between text-[#7C7C7C]  ">
            <NavLink to="#" className="pr-4 ">
              Terms and Conditions
            </NavLink>
            <NavLink to="#" className="pr-4 ">
              privacy policy
            </NavLink>
          </div>
            <div className="text-sm  font-semibold py-1 mt-2">
              <span>Copyright © WossoM 2024</span>
            </div>
          </div>
    
        </div>
      </div>
    </footer>
  );
};

export default index;
