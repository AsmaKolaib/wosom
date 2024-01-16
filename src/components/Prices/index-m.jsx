import React, { useState } from "react";
import "./style.css";

const Prices = () => {
  const [plan, setPlan] = useState(
    " Computer vision | 2D BBox (Poly,Line,Circle,..)"
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-8  font-main ">
      <h1 className="text-center font-extrabold capitalize text-3xl block w-full ">
        Our Price plan
      </h1>
      <div className="flex justify-center items-center my-4">
        <p className="text-center  items-center text-base  ">
          We plan the pricing based on the services , you can pick a plan thats
          works for you
        </p>
      </div>
      <div className=" border-none flex flex-row justify-between items-center w-full p-4 ">
        <div className="w-2/4">{plan}</div>
        <div>
          {" "}
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              change the plan
            </button>

            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <button
                    onClick={() => {
                      setPlan(
                        "Computer vision | 2D BBox (Poly,Line,Circle,..)"
                      );
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Computer vision | 2D BBox (Poly,Line,Circle,..)
                  </button>
                  <button
                    onClick={() => {
                      setPlan("Computer vision | Segmentation");
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Computer vision | Segmentation
                  </button>
                  <button
                    onClick={() => {
                      setPlan(
                        "Natural Language Processing | Named Entity Recognition"
                      );
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Natural Language Processing | Named Entity Recognition
                  </button>
                  <button
                    onClick={() => {
                      setPlan(
                        "Natural Language Processing | Named Entity Relations"
                      );
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Natural Language Processing | Named Entity Relations
                  </button>
                  <button
                    onClick={() => {
                      setPlan(
                        "others | multi-class annotation (emotion-sentiment-topic,...)"
                      );
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    others | multi-class annotation (emotion-
                    sentiment-topic,...)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <table className=" border-collapse text-left  text-base w-full">
          <tbody>
            <tr>
              <td className="w-2/4">Number of Objects</td>
              <td className="w-2/4">1000</td>
            </tr>
            <tr>
              <td className="w-2/4">Annotations Per Object</td>
              <td className="w-2/4">10</td>
            </tr>
            <tr>
              <td className="w-2/4">Time Frame in Days</td>

              {plan ===
              "others | multi-class annotation (emotion-sentiment-topic,...)" ? (
                <td className="w-2/4">1</td>
              ) : (
                <td className="w-2/4">7</td>
              )}
            </tr>
            <tr>
              <td className="w-2/4">Price</td>

              {plan === "Computer vision | 2D BBox (Poly,Line,Circle,..)" ? (
                <td className="font-bold w-2/4">950$</td>
              ) : plan === "Computer vision | Segmentation" ? (
                <td className="font-bold  w-2/4">1200$</td>
              ) : plan ===
                "Natural Language Processing | Named Entity Recognition" ? (
                <td className="font-bold  w-2/4">900$</td>
              ) : plan ===
                "Natural Language Processing | Named Entity Relations" ? (
                <td className="font-bold  w-2/4">950$</td>
              ) : plan ===
                "others | multi-class annotation (emotion-sentiment-topic,...)" ? (
                <td className="font-bold  w-2/4">2000$</td>
              ) : (
                <td className="font-bold w-2/4">950$</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center my-6">
        <p className="text-center  items-center  ">
          If you are interested in a custom plan, please reach out to us at{" "}
          <a href="mailto:wosom@dataplume.com" className="text-blue-500">
            {" "}
            wosom@dataplume.com .
          </a>
        </p>
      </div>
    </div>
  );
};

export default Prices;
