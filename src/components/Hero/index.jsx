import React from "react";
import HeroImg from "../../assets/ima.jpg";
import Img1 from "../../assets/imags/2.png";
import Img2 from "../../assets/imags/3.png";

import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <section className=" h-full lg:h-screen xl:h-full w-full  ">
      <div className="h-full">
        <div className="grid  h-full gap-0 grid-cols-1 lg:grid-cols-[1.3fr_1fr] relative  ">
          <div className="md:hidden  lg:block relative w-2/2  p-0 h-[100%] ">
            <div className="md:flex md:flex-col md:justify-center h-[100%] md:pt-2  w-2/2">
              <svg
                viewBox="0 0 901 841"
                xmlns="/#pattern"
                className=" w-[96%] p-0 "
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width="100%"
                    height="100%"
                  >
                    <image
                      href={HeroImg}
                      height="100%"
                      width="100%"
                      // x={0}
                      // y={0}
                      className=" object-fill"
                    />
                  </pattern>
                </defs>

                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26 0C11.6406 0 0 11.6406 0 26V815C0 829.359 11.6406 841 26 841H390.168C402.022 841 410 826.854 410 815V815V639C410 612.49 431.49 591 458 591H873V591C885.486 591 901 582.597 901 570.111V26C901 11.6406 889.359 0 875 0H26Z"
                  fill="url(#pattern)"
                  // fill="black"
                />
                <foreignObject
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  className="p-0 m-0  pt-8 md:pt-0"
                >
                  <NavLink
                    to="#"
                    className=" text-xl flex justify-center items-center font-main font-bold absolute bottom-[156px] right-[221px] "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="66"
                      height="66"
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
                    Try it for free now
                  </NavLink>
                </foreignObject>
              </svg>
            </div>
          </div>
          <div className="md:w-full lg:w-2/2 flex flex-col justify-center items-center  md:justify-center md:items-start  pl-8  pt-20 ">
            <div className=" w-full  flex flex-col justify-start font-main text-5xl font-bold capitalize  z-10">
              <h1 className=" text-center lg:text-left relative z-[5] md:pt-5 lg:pt-0">
                Seamless AI Data <br /> Collection
                <span className="text-[#FFFFFF] font-mea lowercase font-light text-7xl md:ml-[-7px] lg:ml-[-4px] z-[-3] relative">
                  and
                </span>
              </h1>
              <h1 className=" text-center leading-[1] pl-20">Labeling </h1>
            </div>
            <div className="md:hidden lg:flex md:w-full lg:w-2/4 text-base py-6 md:px-32 lg:px-0 md:text-center lg:text-left   ">
              <p>
                We save time, money, and resources by automating processes that
                are tedious and prone to errors
              </p>
            </div>
            <div className="md:py-10 lg:py-0 w-full   flex items-center justify-center lg:items-end  lg:justify-end">
              <div className=" w-2/4 p-8 pb-0 pr-0 ">
                <img
                  src={Img2}
                  alt=""
                  className="w-[100%] h-[100%] rounded-xl "
                />
              </div>
              <div className="   w-2/3 p-2 pb-0 ">
                <img
                  src={Img1}
                  alt=""
                  className="w-[100%] h-[100%] rounded-xl"
                />
              </div>
            </div>
            <div className=" flex flex-col text-base my-4 text-center px-10">
              <NavLink
                to="#"
                className=" lg:hidden md:flex justify-center items-center font-main font-bold mt-10 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="56"
                  viewBox="0 0 86 86"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M43 86C66.748 86 86 66.748 86 43C86 19.252 66.748 0 43 0C19.252 0 0 19.252 0 43C0 66.748 19.252 86 43 86ZM30 32V50C30 51.1045 30.8945 52 32 52C33.1055 52 34 51.1045 34 50V36.8281L51.5859 54.4141C52.3672 55.1953 53.6328 55.1953 54.4141 54.4141C55.1953 53.6328 55.1953 52.3672 54.4141 51.5859L36.8281 34H50C51.1055 34 52 33.1045 52 32C52 30.8955 51.1055 30 50 30H32C30.8945 30 30 30.8955 30 32Z"
                    fill="black"
                  />
                </svg>
                Try it for free now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
