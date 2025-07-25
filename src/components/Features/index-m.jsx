import React, { useState } from "react";
import TempImg from "../../assets/imags/image Annotation.jpg";
import TempImg2 from "../../assets/imags/dog.jpg";
import TempImg3 from "../../assets/imags/img3.jpg";
import { NavLink } from "react-router-dom";

import TempImg4 from "../../assets/imags/Text Annotation.png";
import TempImg5 from "../../assets/imags/Video Annotation.png";
import TempImg6 from "../../assets/imags/Audio Annotation.png";
import TempImg7 from "../../assets/imags/Management.png";

export const BoxFeature = ({ img, title }) => {
  return (
    <div className=" relative max-w-sm bg-white rounded-[40px] h-fit">
      <img
        src={img}
        alt=""
        className="rounded-[14px] w-full h-[180px] object-cover "
      />
      <div className="  w-full text-white text-center px-20 ">
        <div className="absolute bottom-0 w-[80%] left-[17px] font-bold text-xs mb-2 rounded-[17px]  py-2   bg-black">
          {title}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = [
    <>
      <BoxFeature title="Auto Annotation  " img={TempImg} />
      <BoxFeature title="Annotation Types  " img={TempImg2} />

      <BoxFeature title="High quality" img={TempImg3} />
      <BoxFeature title="AI-Powered Annotation" img={TempImg} />
    </>,
    <>
      <BoxFeature title="Text Annotation " img={TempImg4} />
      <BoxFeature title="Video Annotation " img={TempImg5} />

      <BoxFeature title="Audio Annotation" img={TempImg6} />
      <BoxFeature title="Management" img={TempImg7} />
    </>,
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + totalSlides.length) % totalSlides.length
    );
  };
  return (
    <section className=" px-2 my-8 h-full w-full">
      <div className=" bg-white rounded-[14px] grid gap-6 grid-col-1 w-full  h-full  relative  px-4 pb-10  ">
        <div className="flex  justify-between w-2/2 h-full pt-8 px-2 ">
          <div className="w-full pr-3 ">
            <h1 className="font-main font-bold text-xl sm:text-2xl ">
              Label Faster with <br /> Wasom AI
            </h1>
            <p className=" font-mainLight w-full text-sm sm:text-base leading-[1.1] mt-3">
              Unlock rapid, precise, and scalable annotation capabilities with
              our advanced AutoAnnotate feature
            </p>
          </div>
          <div className="h-[28px] w-[150px] relative text-xs flex justify-center items-center bg-[#F1F0EC] rounded-full py-2">
            <NavLink
              className="absolute top-[-18px]  left-[-13px]"
              onClick={(e) => {
                e.preventDefault();
                handlePrev();
              }}
              id="prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="65"
                viewBox="0 0 122 122"
                fill="none"
              >
                <circle
                  cx="60.7792"
                  cy="60.9705"
                  r="43"
                  transform="rotate(-43.1431 60.7792 60.9705)"
                  fill="#141212"
                />
                <path
                  d="M74.8493 63.4277C75.9532 63.4635 76.8772 62.5975 76.913 61.4935C76.9488 60.3895 76.0829 59.4656 74.9789 59.4298L74.8493 63.4277ZM43.8635 59.0071C43.0576 59.7624 43.0165 61.0281 43.7719 61.834L56.0807 74.9677C56.836 75.7736 58.1017 75.8147 58.9076 75.0593C59.7136 74.304 59.7546 73.0383 58.9993 72.2324L48.0581 60.558L59.7325 49.6169C60.5384 48.8615 60.5795 47.5959 59.8241 46.7899C59.0688 45.984 57.8032 45.9429 56.9972 46.6983L43.8635 59.0071ZM74.9789 59.4298L45.296 58.4674L45.1664 62.4653L74.8493 63.4277L74.9789 59.4298Z"
                  fill="white"
                />
              </svg>
            </NavLink>

            <h3>
              {currentSlide + 1}/{totalSlides.length}
            </h3>
            <NavLink
              className="absolute top-[-18px]  right-[-13px]"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
              id="next"
            >
              {/* <a href="#" className="absolute top-[-18px]  right-[-13px]"> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="60"
                viewBox="0 0 123 122"
                fill="none"
              >
                <circle
                  cx="43"
                  cy="43"
                  r="43"
                  transform="matrix(-0.729648 -0.683822 -0.683822 0.729648 122.338 59)"
                  fill="#141212"
                />
                <path
                  d="M47.4886 63.4277C46.3846 63.4635 45.4607 62.5975 45.4249 61.4935C45.3891 60.3895 46.255 59.4656 47.359 59.4298L47.4886 63.4277ZM78.4744 59.0071C79.2803 59.7624 79.3213 61.0281 78.566 61.834L66.2572 74.9677C65.5019 75.7736 64.2362 75.8147 63.4303 75.0593C62.6243 74.304 62.5833 73.0383 63.3386 72.2324L74.2798 60.558L62.6054 49.6169C61.7995 48.8615 61.7584 47.5959 62.5137 46.7899C63.2691 45.984 64.5347 45.9429 65.3407 46.6983L78.4744 59.0071ZM47.359 59.4298L77.0419 58.4674L77.1715 62.4653L47.4886 63.4277L47.359 59.4298Z"
                  fill="white"
                />
              </svg>
            </NavLink>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 justify-center items-center content-center gap-2 w-2/2 h-full pb-4  ">
          <BoxFeature title="Auto Annotation " img={TempImg} />
          <BoxFeature title="Annotation Types" img={TempImg2} />

          <BoxFeature title="High quality" img={TempImg3} />
          <BoxFeature title="AI-Powered Annotation" img={TempImg} />
        </div> */}

<div className="overflow-hidden w-full h-full" id="slidersection">
          {totalSlides.map((slide, index) => (
            <div
              key={`slide${index + 1}`}
              className={`slide ${
                currentSlide === index ? "active" : "hidden"
              }  `}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
