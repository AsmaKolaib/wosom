import React from "react";
import ELM from "../../assets/imags/ELM.png";
import kindAbdelaziz from "../../assets/imags/kind Abdelaziz.png";
import sdara from "../../assets/imags/sdara.png";
import KingSaud from "../../assets/imags/King saud1.png";
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
    <section className=" w-full">
      <div className=" h-full flex justify-around m-auto w-full ">
        <div className=" flex flex-col  w-full h-full ">
          {/* <div className=" h-full w-fit mr-14">
            <h1 className="  font-main  font-semibold text-lg xl:text-3xl">
              Our Commitment to <br /> Delivering a Trusted AI <br />
              Experience
            </h1>
            <p className=" font-mainLight text-base md:text-lg xl:text-xl pt-4">
              Partners how trust us
            </p>
          </div> */}
          <h4 className=" font-mainLight text-gray-500  text-base md:text-sm xl:text-sm text-left w-full">Trusted By</h4>
          <div className="flex  flex-grow flex-row justify-evenly items-center w-full ">
            {/* {Object.entries(partners).map(([key, value]) => ( */}
            <img
              src={MohamedBinZayed}
              alt="MohamedBin Zayed"
              className="mx-2 w-[64px] h-[52px]"
            />
            <img src={sdara} alt="sdara" className="mx-2 w-[61px] h-[52px]" />
            <img
              src={kindAbdelaziz}
              alt="kind Abdelaziz"
              className="mx-2 w-[61px] h-[72px]"
            />
            <img
              src={KingSaud}
              alt="King Saud"
              className="mx-2 w-[97px] h-[68px]"
            />
            <img src={ELM} alt="ELM" className="mx-2 w-[51px] h-[52px]" />
            {/* ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
