import React from "react";
import ELM from "../../assets/imags/ELM1.png";
import kindAbdelaziz from "../../assets/imags/kind Abdelaziz1.png";
import sdara from "../../assets/imags/sdara1.png";
import KingSaud from "../../assets/imags/King saud1.png";
import MohamedBinZayed from "../../assets/imags/Mohamed bin zayed1.png";

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
      <div className=" h-full flex justify-around m-auto w-full  pt-20 ">
        <div className="bg-white flex justify-between items-center w-full h-full rounded-2xl p-6 py-10 ">
          <div className=" h-full w-fit mr-14">
            <h1 className="  font-main  font-semibold text-lg xl:text-3xl">
              Our Commitment to <br /> Delivering a Trusted AI <br />
              Experience
            </h1>
            <p className=" font-mainLight text-base pt-4">
              Partners how trust us
            </p>
          </div>
          <div className="flex  flex-grow flex-row justify-between items-center">
            {Object.entries(partners).map(([key, value]) => (
              <img
                src={value}
                alt={key}
                className="
                  w-[103px] h-[83px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
