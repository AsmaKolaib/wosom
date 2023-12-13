import React from "react";
import Button from "../Button";
import ArticleBox from "./articleBox";

const Article = () => {
  return (

     <section className=" h-screen px-0 lg:px-0 py-2 ">
      <div className="flex flex-col justify-between rounded-[40px] h-auto bg-main-color px-6 py-8">
        <div className="flex justify-between">
          <div className="mt-4 h-full  w-full lg:w-2/6 lg:pl-8">
            <h1 className=" font-main  font-semibold text-3xl">
              Get Hands-on with <br/> This Interactive Guide
            </h1>
            <p className=" font-mainLight text-base pt-4">
              Delve into the world of AI and labeling: Discover its
              applications, practical usage, and how AI can transform your
              business.
            </p>
          </div>
          <div className="hidden lg:flex justify-end h-full w-5/12">
            <Button text="See More" bgColor="bg-white" textColor="text-black" />
          </div>
        </div>
        <div className=" pt-10 grid grid-cols-3 gap-y-12  ">
          <div class="h-auto w-full  pr-8">
            <ArticleBox />
          </div>
          <div class="h-auto w-full  pr-8">
            <ArticleBox />
          </div>
          <div class="h-auto w-full  pr-8">
            <ArticleBox />
          </div>
        </div>
      </div>
      </section>

  );
};

export default Article;
