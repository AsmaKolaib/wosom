import React from 'react'

const ArticleBox = () => {
  return (
    <div className="relative w-[320px] h-[310px] lg:w-[340px] lg:h-[330px] justify-self-center ">
    <div className=" absolute z-[4] top-0 right-[15px]">
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
    </div>
    {/* <div className=" m-1 w-[300px] h-[150px] resize "> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        //   width="469"
        //  height="437"
        viewBox="0 0 469 437"
        fill="none"
        className="w-[89%] h-[95%] absolute z-[3] "
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M357.908 0C370.167 0 378.74 12.6109 378.74 24.8694V24.8694C378.74 62.9895 409.643 94.1498 447.763 94.1498V94.1498C458.417 94.1498 469 101.731 469 112.385V413C469 426.255 458.255 437 445 437H24C10.7452 437 0 426.255 0 413V24C0 10.7452 10.7452 0 24 0H357.908Z"
          fill="#D9D9D9"
        />
      </svg>
    {/* </div> */}
    <div className="absolute z-[5] ">
      <div className="h-full  pt-12 pl-8 pr-20 ">
        <p className=" font-main font-bold text-base ">
          Artificial Intelligence: A Revolutionary Force Transforming Our
          World
        </p>
      </div>

      <div className="h-full w-[88%]  border-t-2  border-t-slate-500   mt-3 pt-3 pl-8 pr-14 leading-[1.1] ">
        <p className=" text-[13px]  font-mainLight ">
          Delve into the fascinating realm of artificial intelligence (AI)
          and explore its profound impact on our world. Discover how AI is
          revolutionizing industries, reshaping human interactions, and
          redefining the boundaries of what's possible.
        </p>
      </div>
    </div>
  </div>
  )
}

export default ArticleBox