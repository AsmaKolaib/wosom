import React from "react";

const ArticleBox = () => {
  return (
    <div className="relative p-4 ">
      <svg viewBox="0 0 487 451" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M357.908 14C370.167 14 378.74 26.6109 378.74 38.8694C378.74 76.9895 409.643 108.15 447.763 108.15C458.417 108.15 469 115.731 469 126.385V427C469 440.255 458.255 451 445 451H24C10.7452 451 0 440.255 0 427V38C0 24.7452 10.7452 14 24 14H357.908Z"
          fill="#F1F0EC"
        />

        <foreignObject
          x="0"
          y="0"
          width="100%"
          height="100%"
          className="p-0 m-0 md:pt-0 "
        >
          <p className="font-main font-bold text-xl md:text-2xl pt-20 pl-10 pr-20 mb-5">
            Artificial Intelligence: A Revolutionary Force Transforming Our
            World
          </p>

          <div className="border-t-2 border-t-slate-400 w-[96%]"></div>
          <p className="font-mainLight text-xl md:text-lg pt-5 pl-10 pr-20">
            Delve into the fascinating realm of artificial intelligence (AI) and
            explore its profound impact on our world. Discover how AI is
            revolutionizing industries, reshaping human interactions, and
            redefining the boundaries of what's possible.
          </p>
        </foreignObject>
        <a href="http://www.google.com" className="button-container arrow-container">
          <circle cx="444" cy="43" r="43" fill="black" />
          <path  className="arrow-path"
            d="M452.586 54.4142C453.367 55.1953 454.633 55.1953 455.414 54.4142C456.195 53.6332 456.195 52.3668 455.414 51.5858L452.586 54.4142ZM433 30C431.895 30 431 30.8954 431 32V50C431 51.1046 431.895 52 433 52C434.105 52 435 51.1046 435 50V34H451C452.105 34 453 33.1046 453 32C453 30.8954 452.105 30 451 30H433ZM455.414 51.5858L434.414 30.5858L431.586 33.4142L452.586 54.4142L455.414 51.5858Z"
            fill="white"
          />
        </a>
      </svg>
    </div>
  );
};

export default ArticleBox;
