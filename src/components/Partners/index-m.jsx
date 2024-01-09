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
    <section>
      <div className="flex justify-around  w-full my-5 ">
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
          <div className="flex  flex-grow flex-row justify-around items-center">
            {Object.entries(partners).map(([key, value]) => (
              <img
                src={value}
                alt={key}
                className={`${
                  key === "King Saud"
                    ? "w-[176px] h-[44px]"
                    : "w-[80px] h-[70px]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
