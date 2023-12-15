import React from "react";
import HeroImg from "../../assets/imags/hero.jpg";

export const BoxService = ({ img, text, title }) => {
  return (
    <div className="max-w-sm bg-white rounded-[16px] overflow-hidden px-4 pb-4 pt-4 h-fit">
      <img src={img} alt="" className="rounded-[16px] w-full h-[200px]" />
      <div className="py-4">
        <div className="font-bold text-xl mb-2 px-1">{title}</div>
        <p className="text-gray-700 text-sm lg:text-base px-1">{text}</p>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <section className=" lg:h-[1400px] py-4 md:py-12 lg:py-14 xl:py-32 px-6 lg:px-0">
      <div className="h-full w-full">
        <div className="grid w-full  h-full gap-0 lg:grid-cols-2 relative  ">
          <div className="grid grid-cols-1 justify-between content-between  w-2/2 h-full ">
            <div className="w-2/3 lg:p-8  ">
              <h1 className="font-main font-bold text-xl xl:text-4xl">
                Unlocking <br /> Possibilities
              </h1>
              <p className=" font-mainLight w-2/4 text-base leading-[1.1] mt-5 mb-10">
                Our Services Showcase
              </p>
            </div>
            <div className="grid grid-cols-2  gap-6">
              <div className="grid grid-cols-1   gap-y-6">
                <BoxService
                  title="Auto-Annotate"
                  text="Use automatic labeling for large-scale commercial AI projects."
                  img={HeroImg}
                />
                <BoxService
                  title="Management"
                  text="Maintain a well-structured and organized data repository with our intuitive data management tools. Easily upload, categorize, and search for your datasets, ensuring efficient data access and utilization."
                  img={HeroImg}
                />
              </div>
              <div className=" self-center ">
                <BoxService
                  title="Text Annotation"
                  text="Generate alternative wordings and sentence structures, enhancing text clarity and flow."
                  img={HeroImg}
                />
              </div>
            </div>
          </div>
          <div className=" w-2/2 h-full ">
            <div className="grid grid-cols-2  gap-6 h-full  ">
              <div className=" mt-32 ">
                <BoxService
                  title="image Annotation"
                  text="Streamline your image annotation workflow with our robust tools, enabling efficient labeling of large image datasets for diverse AI applications."
                  img={HeroImg}
                />
              </div>
              <div className="grid grid-cols-1 justify-between  gap-y-6">
                <BoxService
                  title="Audio Annotation"
                  text="Annotate audio recordings with precision, identifying and labeling speech, music, and environmental sounds."
                  img={HeroImg}
                />
                <div className=" self-end ">
                  <BoxService
                    title="Video Annotation"
                    text="Automate object detection and segmentation with AI-powered tools, and annotate videos of any length with an intuitive user interface."
                    img={HeroImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
