
import React from "react";


const Button = ({ type, id, text, bgColor, textColor }) => {
  return (
    <div className="relative button-container">
      <span className="arrow-containerM">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 86 86"
          fill="none"
        >
          <circle cx="43" cy="43" r="43" fill="black" />
          <path
            className="arrow-path"
            d="M51.5858 54.4142C52.3668 55.1953 53.6332 55.1953 54.4142 54.4142C55.1953 53.6332 55.1953 52.3668 54.4142 51.5858L51.5858 54.4142ZM32 30C30.8954 30 30 30.8954 30 32L30 50C30 51.1046 30.8954 52 32 52C33.1046 52 34 51.1046 34 50L34 34L50 34C51.1046 34 52 33.1046 52 32C52 30.8954 51.1046 30 50 30L32 30ZM54.4142 51.5858L33.4142 30.5858L30.5858 33.4142L51.5858 54.4142L54.4142 51.5858Z"
            fill="white"
          />
        </svg>
      </span>
      <button
        type={type}
        id={id}
        className={`rounded-full ${bgColor} ${textColor} px-14 py-3 font-bold text-base`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
