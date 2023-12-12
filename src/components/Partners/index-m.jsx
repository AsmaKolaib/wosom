import React from "react";
import ELM from "../../assets/imags/ELM.png";
import kindAbdelaziz from "../../assets/imags/kind Abdelaziz.png";
import sdara from "../../assets/imags/sdara.png";
import KingSaud from "../../assets/imags/King saud.png";
import MohamedBinZayed from "../../assets/imags/Mohamed bin zayed.png";

const index = () => {
  const partners = {
    ELM: ELM,
    "King Saud": KingSaud,
    "Mohamed bin zayed": MohamedBinZayed,
    sdara: sdara,
    "kind Abdelaziz": kindAbdelaziz,
  };

  return (
    <section >
    <div className="flex justify-around m-auto w-full my-5 ">
      <div className="bg-white flex flex-col justify-between w-full mx-2 rounded-[14px] p-4">
        <div className="mt-4 h-full mb-20 ">
          <h1 className=" font-main  font-semibold text-3xl">
            Our Commitment to <br />
            Delivering a Trusted <br />
            AI Experience
          </h1>
          <p className=" font-mainLight text-base pt-4">
            Partners how trust us
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(partners).map(([key, value]) => (
            <div className="h-[160px] relative flex flex-col justify-center items-center rounded-[8px] p-12 bg-[#F1F0EC]">
              <h3 className=" absolute bg-white font-main text-sm rounded-[36px] px-4 py-1 top-2 right-6 ">
                {key}
              </h3>
              <img
                src={value}
                alt={key}
                className={`${
                  key === "King Saud"
                    ? "w-[166px] h-[54px]"
                    : "w-[80px] h-[70px]"
                }`}
              />
            </div>
          ))}
          <div className=" relative flex flex-col justify-between items-end rounded-[26px]  py-4 pl-8 pr-0 bg-black">
            <span className="bg-white w-full rounded-l-full">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 my-1"
              >
                <rect width="46" height="46" rx="23" fill="#F1F0EC" />
                <path
                  d="M30.3694 30.7761C30.798 31.1244 31.4278 31.0592 31.7761 30.6306C32.1244 30.202 32.0592 29.5722 31.6306 29.2239L30.3694 30.7761ZM14.8971 16.0053C14.3477 16.0621 13.9485 16.5535 14.0053 17.1029L14.9314 26.0551C14.9882 26.6045 15.4796 27.0037 16.029 26.9469C16.5783 26.8901 16.9776 26.3987 16.9208 25.8493L16.0976 17.8918L24.0551 17.0686C24.6045 17.0118 25.0037 16.5204 24.9469 15.971C24.8901 15.4217 24.3987 15.0224 23.8493 15.0792L14.8971 16.0053ZM31.6306 29.2239L15.6306 16.2239L14.3694 17.7761L30.3694 30.7761L31.6306 29.2239Z"
                  fill="black"
                />
              </svg>
            </span>
            <h3 className="  text-white text-left font-main text-xl rounded-[36px] ">
              Be one of out partners
            </h3>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default index;
