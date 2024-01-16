import React from "react";
import Button from "../Button/index-m";
import Datasets from "../../assets/imags/44.svg";

const Article = () => {
  return (
    <section className=" h-full px-0 lg:px-0 py-2   ">
      <div className="flex flex-col justify-between  items-center h-auto  px-6 pt-10 ">
        <div className=" flex flex-col h-full  w-full lg:pl-8">
          <h1 className=" font-main  font-semibold text-xl sm:text-2xl ">
            Unleash Your AI Creativity <br /> with Wosom's Rich <br />{" "}
            Multimedia Datasets
          </h1>
          <p className=" font-mainLight  text-sm sm:text-base pt-4">
            Wosom provides a comprehensive collection of high-quality multimedia
            datasets, including videos, images, voices, and text. These datasets
            are carefully curated and ready to use for a variety of AI
            applications, such as machine learning, natural language processing,
            and computer vision
          </p>
        </div>
        <div className="w-full h-fit mt-10 ">
          <img src={Datasets} alt="" />
        </div>
        <div className="mt-8 flex justify-center h-full ">
          <Button
            text="Explore Datasets"
            bgColor="bg-white"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Article;
