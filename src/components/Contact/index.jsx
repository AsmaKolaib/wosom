import React from "react";
import ContactForm from "./contactForm";
const index = () => {
  return (
    <div className="w-full flex items-center justify-center  h-screen ">
      <div className=" p-8 grid gap-4 lg:gap-8 xl:gap-16 items-center justify-center grid-cols-3 w-full  lg:grid-cols-3 ">
        <div className=" flex flex-col justify-between items-center divide-y  divide-gray-200 h-full w-full">
          <div className=" w-full lg:mt-10 ">
            <h1 className="font-main font-bold text-3xl">
              We're Here to <br /> Help
            </h1>
            <p className=" font-mainLight  text-base leading-[1.1] mt-5">
              Whether you're seeking product information, technical support, or
              general guidance, we're here to support you. Drop us a message,
              and we'll respond promptly to address your needs
            </p>
          </div>

          <div className=" bg-white  rounded-[16px] w-full p-2 lg:p-8 text-xs font-bold">
            <ul>
              <li className="flex items-center bg-[#F1F0EC] px-4 py-2 rounded-[8px] mb-4">
                <span className=" mr-2 lg:mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.429 8.969H13.143V10.819C13.678 9.755 15.05 8.799 17.111 8.799C21.062 8.799 22 10.917 22 14.803V22H18V15.688C18 13.475 17.465 12.227 16.103 12.227C14.214 12.227 13.429 13.572 13.429 15.687V22H9.429V8.969ZM2.57 21.83H6.57V8.799H2.57V21.83ZM7.143 4.55C7.14315 4.88528 7.07666 5.21724 6.94739 5.52659C6.81812 5.83594 6.62865 6.11651 6.39 6.352C5.9064 6.83262 5.25181 7.10165 4.57 7.1C3.88939 7.09954 3.23631 6.8312 2.752 6.353C2.51421 6.11671 2.32539 5.83582 2.19634 5.52643C2.0673 5.21704 2.00058 4.88522 2 4.55C2 3.873 2.27 3.225 2.753 2.747C3.23689 2.26816 3.89024 1.9997 4.571 2C5.253 2 5.907 2.269 6.39 2.747C6.872 3.225 7.143 3.873 7.143 4.55Z"
                      fill="black"
                    />
                  </svg>
                </span>
                @wosom.ai
              </li>
              <li className=" flex items-center  bg-[#F1F0EC] px-4 py-2 rounded-[8px] mb-4">
              <span className=" mr-2 lg:mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_275_512)">
                      <path
                        d="M15.7508 0.960938H18.8175L12.1175 8.61927L20 19.0384H13.8283L8.995 12.7184L3.46333 19.0384H0.395L7.56167 10.8468L0 0.961771H6.32833L10.6975 6.73844L15.7508 0.960938ZM14.675 17.2034H16.3742L5.405 2.7001H3.58167L14.675 17.2034Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_275_512">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                @wosom.ai
              </li>
              <li className="flex items-center bg-[#F1F0EC] px-4 py-2 rounded-[8px] mb-4">
              <span className=" mr-2 lg:mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                  >
                    <path
                      d="M1 4L8.8906 9.2604C9.5624 9.70827 10.4376 9.70827 11.1094 9.2604L19 4M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                wosom@dataplume.com
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full col-span-2 lg:bg-[#5933EF] lg:py-16  px-8 lg:px-16  xl:px-32  rounded-[26px] ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default index;
