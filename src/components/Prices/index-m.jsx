import React from "react";
import "./style.css";

const Prices = () => {
  return (
    <div className="w-full py-8 bg-white font-main ">
      <h1 className="text-center font-extrabold capitalize text-3xl block w-full ">
        Our Price plan
      </h1>
      <div className="flex justify-center items-center my-4">
        <p className="text-center  items-center text-base  ">
          We plan the pricing based on the services , you can pick a plan thats
          works for you
        </p>
      </div>

      <div className="flex justify-center items-center my-16 overflow-auto">
        <table className=" border-collapse text-center  text-xs">
          <thead>
            <tr>
              <th colspan="2" className="w-32"></th>
              <th className=" font-normal   text-left ">Number of Objects</th>
              <th className=" font-normal   text-left  ">
                Annotations Per Object
              </th>
              <th className=" font-normal   text-left  ">Time Frame in Days</th>
              <th className=" font-normal   text-center   ">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2" className="border-r-2 text-left ">
                Computer vision
              </td>
              <td className="text-left ">2D BBox (Poly,Line,Circle,..)</td>
              <td>1000</td>
              <td>10</td>
              <td>7</td>
              <td className="font-bold text-base">950$</td>
            </tr>
            <tr>
              <td className="text-left">Segmentation</td>
              <td>1000</td>
              <td>10</td>
              <td>7</td>
              <td className="font-bold text-base">1200$</td>
            </tr>
            <tr className="bg-blue-50">
              <td rowspan="2" className="text-left w-">
                Natural Language Processing
              </td>
              <td className="text-left">Named Entity Recognition</td>
              <td>1000</td>
              <td>10</td>
              <td>7</td>
              <td className="font-bold text-base">900$</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="text-left">Named Entity Relations</td>
              <td>1000</td>
              <td>10</td>
              <td>7</td>
              <td className="font-bold text-base">950$</td>
            </tr>
            <tr className="pt-10">
              <td rowspan="2" className="text-left">
                others
              </td>
              <td className="text-left    ">
                multi-class annotation (emotion- sentiment-topic,...)
              </td>
              <td>1000</td>
              <td>10</td>
              <td>1</td>
              <td className="font-bold text-base">2000$</td>
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
