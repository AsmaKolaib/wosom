import React from "react";
import Button from "../Button";
import ArticleBox from "./articleBox";

const Article = () => {
  return (
    <section className="py-12 px-4 my-16 h-full w-auto rounded-[14px] bg-main-color mx-2 ">
        <div className="  flex flex-col justify-between">
          <div className="w-full  pr-3 ">
          <h1 className="font-main font-bold text-xl sm:text-2xl">
          Get Hands-on with This <br/> Interactive Guide
          </h1>
          <p className=" font-mainLight w-2/2 text-sm sm:text-base leading-[1.1] mt-5">
          Delve into the world of AI and labeling: Discover its
              applications, practical usage, and how AI can transform your
              business.
          </p>
        </div>
       
        <div className=" grid grid-cols-1  gap-y-12 mt-16 ">
          <div class="h-auto w-2/2 pl-6 pr-12">
            <ArticleBox />
          </div>
          <div class="h-auto w-2/2 pl-6 pr-12">
            <ArticleBox />
          </div>
          <div class="h-auto w-2/2 pl-6 pr-12">
            <ArticleBox />
          </div>
        </div>
        <div className="mt-8 flex justify-center h-full ">
            <Button text="See More" bgColor="bg-white" textColor="text-black" />
          </div>
    </div>
    </section>
  );
};

export default Article;
