import React from "react";
import Button from "../Button";
import ArticleBox from "./articleBox";

const Article = () => {
  return (

     <section className=" h-full px-0 lg:px-0 py-2 ">
      <div className="flex flex-col justify-between rounded-2xl h-auto bg-white px-6 py-8">
        <div className="flex justify-between">
          <div className=" h-full  w-full lg:w-2/6 lg:pl-8">
            <h1 className=" font-main  font-semibold text-lg xl:text-3xl">
              Get Hands-on with <br/> This Interactive Guide
            </h1>
            <p className=" font-mainLight text-base md:text-lg xl:text-xl pt-4">
              Delve into the world of AI and labeling: Discover its
              applications, practical usage, and how AI can transform your
              business.
            </p>
          </div>
          <div className="hidden lg:flex justify-end h-full w-5/12">
            <Button text="See More" bgColor="bg-[#F1F0EC]" textColor="text-black" />
          </div>
        </div>
        <div className=" pt-10 grid grid-cols-2 lg:grid-cols-3 gap-y-12  ">
          <div class="h-auto w-full  pl-8">
            <ArticleBox />
          </div>
          <div class="h-auto w-full  pl-8">
            <ArticleBox />
          </div>
          <div class="h-auto w-full  pl-8">
            <ArticleBox />
          </div>
        </div>
      </div>
      </section>

  );
};

export default Article;
