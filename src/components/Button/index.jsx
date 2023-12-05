import React from "react";

const Button = ({ type, id, text, bgColor, textColor }) => {
  return (
    <div className="relative">
      {/* <span className=" absolute top-[-16px] left-[-45px] w-[80px] h-[80px] rounded-[50%] flex justify-center items-center p-6 bg-secondary-color">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5858 24.4142C22.3668 25.1953 23.6332 25.1953 24.4142 24.4142C25.1953 23.6332 25.1953 22.3668 24.4142 21.5858L21.5858 24.4142ZM2 9.55844e-07C0.895431 1.12907e-07 1.12907e-07 0.895431 9.55844e-07 2L1.20872e-06 20C5.34375e-07 21.1046 0.895432 22 2 22C3.10457 22 4 21.1046 4 20L4 4L20 4C21.1046 4 22 3.10457 22 2C22 0.895432 21.1046 5.34375e-07 20 1.20872e-06L2 9.55844e-07ZM24.4142 21.5858L3.41421 0.585787L0.585787 3.41421L21.5858 24.4142L24.4142 21.5858Z"
            fill="black"
          />
        </svg>
      </span> */}
       <span className=" absolute top-[-8px] left-[-28px]">

<svg
            xmlns="http://www.w3.org/2000/svg"
            // width="86"
            // height="86"
            width="66"
            height="66"
            viewBox="0 0 86 86"
            fill="none"
          >
            <circle cx="43" cy="43" r="43" fill="#D9D9D9" />
            <path
              d="M51.5858 54.4142C52.3668 55.1953 53.6332 55.1953 54.4142 54.4142C55.1953 53.6332 55.1953 52.3668 54.4142 51.5858L51.5858 54.4142ZM32 30C30.8954 30 30 30.8954 30 32L30 50C30 51.1046 30.8954 52 32 52C33.1046 52 34 51.1046 34 50L34 34L50 34C51.1046 34 52 33.1046 52 32C52 30.8954 51.1046 30 50 30L32 30ZM54.4142 51.5858L33.4142 30.5858L30.5858 33.4142L51.5858 54.4142L54.4142 51.5858Z"
              fill="black"
            />
          </svg> 
          </span>
      <button
        type={type}
        id={id}
        className={` rounded-full ${bgColor} ${textColor}  px-16 py-3 font-bold text-lg `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
