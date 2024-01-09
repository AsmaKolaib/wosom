import React from "react";
import TempImg from "../../assets/imags/img.jpg";
import { NavLink } from "react-router-dom";

export const BoxFeature = ({ img, title }) => {
  return (
    <div className=" relative max-w-sm bg-white  rounded-2xl h-fit ">
      <img src={img} alt="" className="rounded-2xl w-full object-cover " />
      <div className="  w-full text-white text-center px-20 ">
        <div className=" text-xs absolute bottom-0 w-[90%] left-[10px] lg:left-[20px]  lg:text-base mb-2 rounded-[17px] px-6 py-2   bg-black">
          {title}
        </div>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <section>
      <div className="h-full w-full">
        <div className="flex flex-row items-center  w-full  h-full  relative  ">
          <div className="mr-4 flex flex-col justify-between  w-2/4 h-full bg-white rounded-2xl p-6 pt-8 lg:p-14">
            <div className=" w-full lg:w-2/3  ">
              <h1 className="font-main font-bold text-xl xl:text-4xl">
                Label Faster with <br /> Wasom AI
              </h1>
              <p className=" font-mainLight w-2/2  text-sm lg:text-base leading-[1.1] mt-5">
                Unlock rapid, precise, and scalable annotation capabilities with
                our advanced AutoAnnotate feature
              </p>
            </div>
            <div className=" mt-[calc(60%_-_5px)] ml-2 w-[150px] relative  flex justify-center items-center bg-[#F1F0EC] rounded-full text-base py-2">
              <NavLink to="#" className="absolute top-[-20px]  left-[-25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="80"
                  viewBox="0 0 122 122"
                  fill="none"
                >
                  <circle
                    cx="60.7792"
                    cy="60.9705"
                    r="43"
                    transform="rotate(-43.1431 60.7792 60.9705)"
                    fill="#141212"
                  />
                  <path
                    d="M74.8493 63.4277C75.9532 63.4635 76.8772 62.5975 76.913 61.4935C76.9488 60.3895 76.0829 59.4656 74.9789 59.4298L74.8493 63.4277ZM43.8635 59.0071C43.0576 59.7624 43.0165 61.0281 43.7719 61.834L56.0807 74.9677C56.836 75.7736 58.1017 75.8147 58.9076 75.0593C59.7136 74.304 59.7546 73.0383 58.9993 72.2324L48.0581 60.558L59.7325 49.6169C60.5384 48.8615 60.5795 47.5959 59.8241 46.7899C59.0688 45.984 57.8032 45.9429 56.9972 46.6983L43.8635 59.0071ZM74.9789 59.4298L45.296 58.4674L45.1664 62.4653L74.8493 63.4277L74.9789 59.4298Z"
                    fill="white"
                  />
                </svg>
              </NavLink>

              <h3>1/4</h3>
              <NavLink to="#" className="absolute top-[-20px]  right-[-25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="80"
                  viewBox="0 0 123 122"
                  fill="none"
                >
                  <circle
                    cx="43"
                    cy="43"
                    r="43"
                    transform="matrix(-0.729648 -0.683822 -0.683822 0.729648 122.338 59)"
                    fill="#141212"
                  />
                  <path
                    d="M47.4886 63.4277C46.3846 63.4635 45.4607 62.5975 45.4249 61.4935C45.3891 60.3895 46.255 59.4656 47.359 59.4298L47.4886 63.4277ZM78.4744 59.0071C79.2803 59.7624 79.3213 61.0281 78.566 61.834L66.2572 74.9677C65.5019 75.7736 64.2362 75.8147 63.4303 75.0593C62.6243 74.304 62.5833 73.0383 63.3386 72.2324L74.2798 60.558L62.6054 49.6169C61.7995 48.8615 61.7584 47.5959 62.5137 46.7899C63.2691 45.984 64.5347 45.9429 65.3407 46.6983L78.4744 59.0071ZM47.359 59.4298L77.0419 58.4674L77.1715 62.4653L47.4886 63.4277L47.359 59.4298Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
          <div className="  grid grid-cols-2 justify-center items-center content-center gap-2 lg:gap-6 w-2/4 h-full   ">
            <BoxFeature title="AI-Powered Annotation" img={TempImg} />
            <BoxFeature title="AI-Powered Annotation" img={TempImg} />

            <BoxFeature title="AI-Powered Annotation" img={TempImg} />
            <BoxFeature title="AI-Powered Annotation" img={TempImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
