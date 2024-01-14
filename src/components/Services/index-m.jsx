import React from "react";
import AudioAnnotation from "../../assets/imags/Audio Annotation.png";
import VideoAnnotation from "../../assets/imags/Video Annotation.png";
import ImageAnnotation from "../../assets/imags/image Annotation.jpg";
import TextAnnotation from "../../assets/imags/Text Annotation.png";
import Management from "../../assets/imags/Management.png";
import AutoAnnotate from "../../assets/imags/Auto-Annotate.jpeg";
export const BoxService = ({ img, text, title }) => {
  return (
    <div className=" bg-white rounded-[14px] overflow-hidden px-6 pb-4 pt-6 h-full">
      <img
        src={img}
        alt=""
        className="rounded-[14px] w-full h-[200px] object-cover"
      />
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
};

const index = () => {

  return (
    <section className=" px-2 my-8 h-full w-full">
      <div className="grid w-full  h-full gap-0  relative p-4 ">
        <div className="w-full mb-10  ">
          <h1 className="font-main font-bold text-xl sm:text-2xl">
            Unlocking <br /> Possibilities
          </h1>
          <p className=" font-mainLight w-2/2 text-sm sm:text-base leading-[1.1] mt-5">
            Our Services Showcase
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div className="py-4 h-full">
            <BoxService
              title="Management"
              text="Maintain a well-structured and organized data repository with our intuitive data management tools. Easily upload, categorize, and search for your datasets, ensuring efficient data access and utilization."
              img={Management}
            />
          </div>
          <div className="py-4 h-full">
            <BoxService
              title="Text Annotation"
              text="Generate alternative wordings and sentence structures, enhancing text clarity and flow."
              img={TextAnnotation}
            />
          </div>
          <div className="py-4 h-full">
            <BoxService
              title="image Annotation"
              text="Streamline your image annotation workflow with our robust tools, enabling efficient labeling of large image datasets for diverse AI applications."
              img={ImageAnnotation}
            />
          </div>
          <div className="py-4 h-full">
            <BoxService
              title="Audio Annotation"
              text="Annotate audio recordings with precision, identifying and labeling speech, music, and environmental sounds."
              img={AutoAnnotate}
            />
          </div>
          <div className="py-4 h-full">
            <BoxService
              title="Video Annotation"
              text="Automate object detection and segmentation with AI-powered tools, and annotate videos of any length with an intuitive user interface."
              img={VideoAnnotation}
            />
          </div>
          <div className="py-4 h-full">
            <BoxService
              title="Auto-Annotate"
              text="Use automatic labeling for large-scale commercial AI projects."
              img={AudioAnnotation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
