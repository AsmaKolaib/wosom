import React from "react";

const ArticleBox = () => {
  return (
    <div className="relative">
      <div className="w-[66px] h-[76px] sm:w-[76px] sm:h-[86px] md:w-[56px] md:h-[56px] xl:w-[76px] xl:h-[76px] absolute md:top-[-22px]  lg:top-[-25px] right-[-22px]">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 86 86"
            fill="none"
            className=" w-[100%]  h-[100%]"
          >
            <circle cx="43" cy="43" r="43" fill="#D9D9D9" />
            <path
              d="M51.5858 54.4142C52.3668 55.1953 53.6332 55.1953 54.4142 54.4142C55.1953 53.6332 55.1953 52.3668 54.4142 51.5858L51.5858 54.4142ZM32 30C30.8954 30 30 30.8954 30 32L30 50C30 51.1046 30.8954 52 32 52C33.1046 52 34 51.1046 34 50L34 34L50 34C51.1046 34 52 33.1046 52 32C52 30.8954 51.1046 30 50 30L32 30ZM54.4142 51.5858L33.4142 30.5858L30.5858 33.4142L51.5858 54.4142L54.4142 51.5858Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 469 437"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M357.908 0C370.167 0 378.74 12.6109 378.74 24.8694V24.8694C378.74 62.9895 409.643 94.1498 447.763 94.1498V94.1498C458.417 94.1498 469 101.731 469 112.385V413C469 426.255 458.255 437 445 437H24C10.7452 437 0 426.255 0 413V24C0 10.7452 10.7452 0 24 0H357.908Z"
          fill="#D9D9D9"
        />
        <foreignObject
          x="0"
          y="0"
          width="100%"
          height="100%"
          className="p-0 m-0  pt-8 md:pt-0"
        >
          <p className=" font-main font-bold text-lg md:text-2xl pt-20 pl-10 pr-20 mb-5    ">
            Artificial Intelligence: A Revolutionary Force Transforming Our
            World
          </p>

          <div className="pr-5 border-t-2  border-t-slate-400 "></div>
          <p className=" font-mainLight text-base md:text-lg pt-5 pl-10 pr-20   ">
            Delve into the fascinating realm of artificial intelligence (AI) and
            explore its profound impact on our world. Discover how AI is
            revolutionizing industries, reshaping human interactions, and
            redefining the boundaries of what's possible.
          </p>
        </foreignObject>
      </svg>
    </div>
  );
};

export default ArticleBox;
