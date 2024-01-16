import React from "react";
import Img1 from "../../assets/imags/2.png";
import Img2 from "../../assets/imags/3.png";
import Partners from "../Partners//index-m";
import Button from "../Button/index-m";
import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <section className="   ">
      <div className="grid grid-cols-1 gap-y-4 w-2/2 px-4 pt-32 h-full">
        <div className=" text-center font-main text-4xl font-bold capitalize leading-[.5] z-10">
          <h1 className=" relative z-[5]">
            Seamless AI Data Collection{" "}
            <span className="text-[#BDB7B7] font-mea lowercase font-light text-8xl ml-[-13px] z-[-3] relative">
              and
            </span>
          </h1>
          <h1 className=" text-center leading-[1]">Labeling </h1>
        </div>

        {/* <div className="w-full flex  items-end justify-end">
        <div className=" w-2/4 p-1 ">
                <img
                  src={Img2}
                  alt="WosomAI"
                  className="w-[100%] h-[100%] rounded-xl "
                />
              </div>
              <div className=" w-2/3 p-1 ">
                <img
                  src={Img1}
                  alt="WosomAI"
                  className="w-[100%] h-[100%] rounded-xl"
                />
              </div>
            </div> */}
        <div>
          <div className=" flex flex-col text-base my-4 text-center ">
            <p>
              We save time, money, and resources by automating processes that
              are tedious and prone to errors
            </p>
            {/* <NavLink
              to="#"
              className=" flex justify-center items-center font-main font-bold mt-10 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 86 86"
                fill="none"
                className="mr-4  button-container  "
              >
                <circle cx="43" cy="43" r="43" fill="black" />
                <path
                  className="arrow-path"
                  d="M51.5858 54.4142C52.3668 55.1953 53.6332 55.1953 54.4142 54.4142C55.1953 53.6332 55.1953 52.3668 54.4142 51.5858L51.5858 54.4142ZM32 30C30.8954 30 30 30.8954 30 32L30 50C30 51.1046 30.8954 52 32 52C33.1046 52 34 51.1046 34 50L34 34L50 34C51.1046 34 52 33.1046 52 32C52 30.8954 51.1046 30 50 30L32 30ZM54.4142 51.5858L33.4142 30.5858L30.5858 33.4142L51.5858 54.4142L54.4142 51.5858Z"
                  fill="white"
                />
              </svg>
              Try it for free now */}
              
            {/* </NavLink> */}
            <div className="mt-8 flex justify-center h-full  mb-10">
            <Button text=" Try it for free now" bgColor="bg-white" textColor="text-black" />
          </div>
          </div>
          <Partners/>
        </div>
      </div>
    </section>
  );
};

export default index;
