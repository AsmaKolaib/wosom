import React from "react";
import FAQSection from "./faqSection";
import { questions } from "./questions";
const index = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row  items-start  ">
      <div className=" w-full lg:w-2/3 lg:p-8 lg:pt-0 ">
        <h1 className="font-main font-bold text-lg xl:text-3xl">
          Frequently Asked <br /> Questions
        </h1>
        <p className=" font-mainLight lg:w-2/3 text-base md:text-lg xl:text-xl leading-[1.1] mt-5">
          Whether you're seeking product information, technical support, or
          general guidance, we're here to support you. Drop us a message, and
          we'll respond promptly to address your needs
        </p>
      </div>
      <div className="w-full lg:w-2/3 md:pl-3 lg:pl-0 lg:mx-auto px-5 md:pt-4 lg:pt-0 lg:px-5 ">
        {questions.map((item) => {
          return <FAQSection question={item.question} answer={item.answer} />;
        })}
        <FAQSection
          question="What are the benefits of using AI labeling and annotation services?"
          answer={
            <>
              "There are a number of benefits to using AI labeling and
              annotation services, including:
              <ul>
                <li>
                  <span className="underline">Increased accuracy:</span> Trained
                  annotators will label your data with a high degree of
                  accuracy, which will improve the performance of your AI models
                </li>
                <li>
                  <span className=" underline"> Reduced costs:</span> You can
                  save money by outsourcing your AI labeling and annotation
                  needs to a professional service provider.
                </li>
                <li>
                  <span className=" underline"> Faster development:</span>Faster
                  development: You can accelerate the development of your AI
                  models by using AI labeling and annotation services.
                </li>
              </ul>
            </>
          }
        />
      </div>
    </div>
  );
};

export default index;
