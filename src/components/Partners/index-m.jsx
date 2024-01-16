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
    <section>
      <div className="flex justify-around  w-full my-5 ">
        <div className="bg-white flex flex-col justify-between w-full mx-2 rounded-[14px] p-4">
          <div className="mt-4 h-full mb-10 ">
            <h1 className=" font-main  font-semibold text-xl">
              Our Commitment to <br />
              Delivering a Trusted <br />
              AI Experience
            </h1>
            <p className=" font-mainLight text-base pt-4">
              Partners how trust us
            </p>
          </div>
          <div className="flex  flex-grow flex-row justify-around items-center pb-8">
            {Object.entries(partners).map(([key, value]) => (
              <img
                src={value}
                alt={key}
                className={`${
                  key === "King Saud"
                    ? "w-[116px] h-[34px]"
                    : "w-[50px] h-[50px]"
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
