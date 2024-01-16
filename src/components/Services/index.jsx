import React from "react";
import AudioAnnotation from "../../assets/imags/Audio Annotation.png";
import VideoAnnotation from "../../assets/imags/Video Annotation.png";
import ImageAnnotation from "../../assets/imags/image Annotation.jpg";
import TextAnnotation from "../../assets/imags/Text Annotation.png";
import Management from "../../assets/imags/Management.png";
import AutoAnnotate from "../../assets/imags/Auto-Annotate.jpeg";
export const BoxService = ({ img, text, title }) => {
  return (
    <div className="max-w-md bg-white rounded-2xl overflow-hidden px-4 pb-4 pt-4 h-full">
      <img
        src={img}
        alt="Service Image"
        className="rounded-xl w-full h-[200px] object-cover"
      />
      <div className="">
        <div className="font-bold text-xl pt-3 px-1 ">{title}</div>
        <p className="text-gray-700 text-base  px-1 py-1">
          {text}
        </p>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div className="h-full w-full font-main ">
      <div className="grid grid-cols-1 justify-between content-between  w-2/2 h-full ">
        <div className="w-full lg:p-8  ">
          <h1 className="font-main font-bold text-lg xl:text-3xl">
            Unlocking Possibilities
          </h1>
          <p className=" font-mainLight w-full  text-base md:text-lg xl:text-xl  leading-[1.1] mt-5">
            Our Services Showcase
          </p>
        </div>
        <div className="grid grid-cols-1 ">
        <div className="flex  flex-row   gap-8 w-full px-8 py-4">
        <div className=" h-full ">
            <BoxService
              title="Management"
              text="Maintain a well-structured and organized data repository with our intuitive data management tools. Easily upload, categorize, and search for your datasets, ensuring efficient data access and utilization."
              img={Management}
            />
          </div>
          <div className="h-full ">
            <BoxService
              title="Text Annotation"
              text="Generate alternative wordings and sentence structures, enhancing text clarity and flow."
              img={TextAnnotation}
            />
          </div>
          <div className="h-full">
            <BoxService
              title="image Annotation"
              text="Streamline your image annotation workflow with our robust tools, enabling efficient labeling of large image datasets for diverse AI applications."
              img={ImageAnnotation}
            />
          </div>
          </div>
          <div className="flex  flex-row  gap-x-8 w-full px-8 py-4">
            <div className=" h-full">
              <BoxService
                title="Audio Annotation"
                text="Annotate audio recordings with precision, identifying and labeling speech, music, and environmental sounds."
                img={AudioAnnotation}
              />
            </div>
            <div className=" h-full ">
              <BoxService
                title="Video Annotation"
                text="Automate object detection and segmentation with AI-powered tools, and annotate videos of any length with an intuitive user interface."
                img={VideoAnnotation}
              />
            </div>
            <div className=" h-full">
              <BoxService
                title="Auto-Annotate"
                text="Use automatic labeling for large-scale commercial AI projects."
                img={AutoAnnotate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
