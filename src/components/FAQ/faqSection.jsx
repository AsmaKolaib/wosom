import React from "react";

const FAQSection= ({ question, answer })=> {
  return (
    <div className="mx-auto grid lg:max-w-xl divide-y divide-neutral-200 font-mainLight after:content after:pb-2 after:border-b-2 after:border-b-[#e5e7eb] ">
      <div className="">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-sm p-2 ">
            <span className=" pr-20" > {question} </span>
            <span className="transition group-open:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="11"
                viewBox="0 0 28 13"
                fill="none"
              >
                <line
                  x1="0.325396"
                  y1="0.620372"
                  x2="14.3254"
                  y2="12.6204"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="18.4391"
                  y2="-0.5"
                  transform="matrix(-0.759257 0.650791 0.650791 0.759257 28 1)"
                  stroke="black"
                />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn  mt-3 pl-2 font-mainLight text-neutral-600 font-light font-base ">
            {answer}
          </p>
        </details>
      </div>
    </div>
  );
}

export default FAQSection;