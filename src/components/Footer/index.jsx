import React from "react";
import logo from "../../assets/imags/logo.png";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../components/Button/to-up";
const index = () => {
  const links = {
    service: "Service",
    features: "Features",
    " market": " Market",
    pricing: "Pricing",
    " blog": " blog",
    " contact": " contact",
  };
  return (
    <footer className=" relative mt-12">
      <ScrollToTop />
      <section className=" bg-black text-[#D2D2D2]   pt-8 pb-6 mt-5">
        <div className="container mx-auto  px-0 lg:px-10">
          <div className="mt-12">
            <img src={logo} alt="Wosom" width={80} height={0} />
          </div>
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 ">
              <p className=" text-base md:text-lg xl:text-xl mt-4 pr-20 ">
                We save time, money, and resources by automating processes that
                are tedious and prone to errors
              </p>
            </div>
            <div className="w-full lg:w-6/12 lg:px-4  text-base md:text-lg xl:text-xl">
              <div className="flex flex-wrap items-top mt-6 lg:mb-6">
                <div className="w-full md:w-4/12 lg:px-4 lg:ml-auto capitalize">
                  <ul className="list-unstyled">
                    {Object.entries(links)
                      .filter((i, index) => index < 3)
                      .map(([key, value]) => (
                        <li>
                          <NavLink
                            to="#"
                            className=" hover:text-[#BBBBBB]  block pb-2 "
                          >
                            {value}
                          </NavLink>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="w-full md:w-4/12 px-4 capitalize">
                  <ul className="list-unstyled">
                    {Object.entries(links)
                      .filter((i, index) => index > 2)
                      .map(([key, value]) => (
                        <li>
                          <NavLink
                            to="#"
                            className=" hover:text-[#BBBBBB]  block pb-2 "
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
          <div className="flex justify-between  ">
            <div className="w-full md:w-4/12 ">
              <div className="text-sm  font-semibold py-1">
                <span>Copyright © WossoM  {new Date().getFullYear()} </span>
              </div>
            </div>
            <div className="flex justify-between text-[#7C7C7C]  ">
              <NavLink to="#" className="pr-4 ">
                Terms and Conditions
              </NavLink>
              <NavLink to="#" className="pr-4 ">
                privacy policy
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default index;
