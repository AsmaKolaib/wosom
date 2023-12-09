import React from "react";
import Button from "../Button";
import ArticleBox from "./articleBox";

const Article = () => {
  return (
    <>
      <div className="m-8 p-14 pb-16 rounded-[40px] bg-main-color  ">
        <div className="flex justify-between">
          <div className="mt-4 h-full w-2/6">
            <h1 className=" font-main  font-semibold text-3xl">
              Get Hands-on with This Interactive Guide
            </h1>
            <p className=" font-mainLight text-base pt-4">
              Delve into the world of AI and labeling: Discover its
              applications, practical usage, and how AI can transform your
              business.
            </p>
          </div>
          <div className="flex justify-end h-full w-5/12">
            <Button text="See More" bgColor="bg-white" textColor="text-black" />
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 mt-16 ">
          <div class="h-auto w-full  p-4">
            <ArticleBox />
          </div>
          <div class="h-auto w-full  p-4">
            <ArticleBox />
          </div>
          <div class="h-auto w-full  p-4">
            <ArticleBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
