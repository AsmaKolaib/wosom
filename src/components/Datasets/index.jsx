import React from "react";
import Button from "../Button";
import Datasets from "../../assets/imags/44.svg";


const Article = () => {
  return (

     <section className=" h-full px-0 lg:px-0 py-2 ">
      <div className="flex flex-row justify-between  items-center h-auto  px-6 ">

          <div className=" flex flex-col h-full  w-2/4 lg:pl-8">
            <h1 className=" font-main  font-semibold text-lg xl:text-3xl">
            Unleash Your AI Creativity <br/>  with Wosom's Rich <br/>  Multimedia Datasets 
            </h1>
            <p className=" font-mainLight text-base md:text-lg xl:text-xl pt-4">
            Wosom provides a comprehensive collection of high-quality multimedia datasets, including videos, images, voices, and text. These datasets are carefully curated and ready to use for a variety of AI applications, such as machine learning, natural language processing, and computer vision
            </p>
           <div className=" p-8">
           <Button text="Explore Datasets" bgColor="bg-white" textColor="text-black" />
           </div>
          </div>
          <div className="w-2/4 h-fit ">
            <img src={Datasets} alt="" />
          </div>
   
      
      </div>
      </section>

  );
};

export default Article;
