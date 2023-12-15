import React from "react";
import FAQSection from "./faqSection";
import { questions } from "./questions";
const index = () => {
  return (
    <section className=" px-4   w-full">
      <div className="flex flex-col justify-evenly h-full">
        <div className="w-full  pr-3 mb-4 ">
          <h1 className="font-main font-bold text-xl sm:text-2xl">
            Frequently Asked <br /> Questions
          </h1>
          <p className=" font-mainLight w-2/2 text-sm sm:text-base leading-[1.1] mt-5">
            Whether you're seeking product information, technical support, or
            general guidance, we're here to support you. Drop us a message, and
            we'll respond promptly to address your needs
          </p>
        </div>
        <div className=" w-full  text-sm">
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
                    <span className="underline">Increased accuracy:</span>{" "}
                    Trained annotators will label your data with a high degree
                    of accuracy, which will improve the performance of your AI
                    models
                  </li>
                  <li>
                    <span className=" underline"> Reduced costs:</span> You can
                    save money by outsourcing your AI labeling and annotation
                    needs to a professional service provider.
                  </li>
                  <li>
                    <span className=" underline"> Faster development:</span>
                    Faster development: You can accelerate the development of
                    your AI models by using AI labeling and annotation services.
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default index;
