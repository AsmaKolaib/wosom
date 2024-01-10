import React from "react";
import M from "../../assets/imags/m.jpg";
import T from "../../assets/imags/T-01.jpg";
import I from "../../assets/imags/I-01.jpg";
import A from "../../assets/imags/A-01.jpg";
import V from "../../assets/imags/V-01.jpg";
import A2 from "../../assets/imags/Auto-01.jpg";
export const BoxService = ({ img, text, title }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden px-4 pb-4 pt-4 h-full">
      <img
        src={img}
        alt=""
        className="rounded-xl w-full h-[200px] object-cover"
      />
      <div className="py-4">
        <div className="font-bold text-xl mb-2 px-1">{title}</div>
        <p className="text-gray-700 text-sm lg:text-base px-1">{text}</p>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div className="h-full w-full py-5">
      <div className="grid grid-cols-1 justify-between content-between  w-2/2 h-full ">
        <div className="w-full lg:p-8 mb-5 ">
          <h1 className="font-main font-bold text-xl xl:text-4xl">
            Unlocking <br /> Possibilities
          </h1>
          <p className=" font-mainLight w-2/4 text-base leading-[1.1] mt-5">
            Our Services Showcase
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="py-4 h-full">
            <BoxService
              title="Management"
              text="Maintain a well-structured and organized data repository with our intuitive data management tools. Easily upload, categorize, and search for your datasets, ensuring efficient data access and utilization."
              img={M}
            />
          </div>
          <div className="py-4 h-full">
            <BoxService
              title="Text Annotation"
              text="Generate alternative wordings and sentence structures, enhancing text clarity and flow."
              img={T}
            />
          </div>
          <div className="py-4 h-full">
            <BoxService
              title="image Annotation"
              text="Streamline your image annotation workflow with our robust tools, enabling efficient labeling of large image datasets for diverse AI applications."
              img={I}
            />
          </div>

          <div className="py-4 h-full">
            <BoxService
              title="Audio Annotation"
              text="Annotate audio recordings with precision, identifying and labeling speech, music, and environmental sounds."
              img={A}
            />
          </div>

          <div className="py-4 h-full">
            <BoxService
              title="Video Annotation"
              text="Automate object detection and segmentation with AI-powered tools, and annotate videos of any length with an intuitive user interface."
              img={V}
            />
          </div>
          <div className="py-4 h-full">
            <BoxService
              title="Auto-Annotate"
              text="Use automatic labeling for large-scale commercial AI projects."
              img={A2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
