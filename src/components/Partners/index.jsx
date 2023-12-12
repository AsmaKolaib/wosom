import React from "react";
import ELM from "../../assets/imags/ELM.png";
import kindAbdelaziz from "../../assets/imags/kind Abdelaziz.png";
import sdara from "../../assets/imags/sdara.png";
import KingSaud from "../../assets/imags/King saud.png";
import MohamedBinZayed from "../../assets/imags/Mohamed bin zayed.png";
import { PressStart, generateRandomWord } from "./fallbox";
// import PhysicsAnimation from './fallbox';
const index = () => {
  const partners = {
    ELM: ELM,
    "King Saud": KingSaud,
    "Mohamed bin zayed": MohamedBinZayed,
    sdara: sdara,
    "kind Abdelaziz": kindAbdelaziz,
  };

  return (
    <div className="flex justify-around m-auto w-[95%] my-5 h-screen">
      <div className="bg-white flex flex-col justify-between w-[90%] mx-2 rounded-[40px] p-10  pr-20">
        <div className="mt-4 h-full w-2/4">
          <h1 className=" font-main  font-semibold text-3xl">
            Our Commitment to Delivering a Trusted AI Experience{" "}
          </h1>
          <p className=" font-mainLight text-base pt-4">
            Partners how trust us
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {Object.entries(partners).map(([key, value]) => (
            <div className=" relative flex flex-col justify-center items-center rounded-[26px] p-12 bg-[#F1F0EC]">
              <h3 className=" absolute bg-white font-main text-sm rounded-[36px] px-4 py-1 top-2 right-6 ">
                {key}
              </h3>
              <img src={value} alt="ELM" width={80} height={90} />
            </div>
          ))}
          <div className=" relative flex flex-col justify-end items-end rounded-[26px] p-8 bg-black">
            <h3 className="  text-white font-main text-xl rounded-[36px]  ">
            Be one of out partners 
            </h3>

          </div>
        </div>
      </div>

      <div  className="bg-[#5933EF] w-2/6 mx-2 rounded-[40px]">
      <PressStart />
      </div>
    </div>
  );
};

export default index;
