import React from "react";
import styles from "./style.css";

const Prices = () => {
  return (
    <div className="w-full  font-main mt-4 leading-[1] ">
      <h1 className="text-center font-extrabold capitalize text-5xl block w-full ">
        Our Price plan
      </h1>
      <div className="flex justify-center items-center my-2">
        <p className="text-center  items-center md:w-3/5 lg:w-3/12  ">
          We plan the pricing based on the services , you can pick a plan thats
          works for you
        </p>
      </div>

      <div className="flex justify-center items-center mt-4">
        <table className="w-[90%] border-collapse text-center text-base">
          <thead>
            <tr>
              <th colspan="2"></th>
              <th className=" font-normal p-4 w-28 text-left">
                Number of Objects
              </th>
              <th className=" font-normal p-4 w-28 text-left">
                Annotations Per Object
              </th>
              <th className=" font-normal p-4 w-32 text-left">
                Time Frame in Days
              </th>
              <th className=" font-normal p-4w-28text-left w-24 ">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2" className="border-r-2 text-left ">
                Computer vision
              </td>
              <td className="text-left">2D BBox (Poly,Line,Circle,..)</td>
              <td>1000</td>
              <td>10</td>
              <td>7</td>
              <td className="font-bold text-lg">950$</td>
            </tr>
            <tr>
              <td className="text-left">Segmentation</td>
              <td>1000</td>
              <td>10</td>
              <td>7</td>
              <td className="font-bold text-lg">1200$</td>
            </tr>
            <tr className="bg-blue-50">
              <td rowspan="2" className="text-left w-">
                Natural Language Processing
              </td>
              <td className="text-left">Named Entity Recognition</td>
              <td>1000</td>
              <td>10</td>
              <td>7</td>
              <td className="font-bold text-lg">900$</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="text-left">Named Entity Relations</td>
              <td>1000</td>
              <td>10</td>
              <td>7</td>
              <td className="font-bold text-lg">950$</td>
            </tr>
            <tr className="pt-10">
              <td rowspan="2" className="text-left">
                others
              </td>
              <td></td>
              <td>1000</td>
              <td>10</td>
              <td>1</td>
              <td className="font-bold text-lg">2000$</td>
            </tr>
          </tbody>
        </table>
    
      </div>
      <div className="flex justify-center items-center my-6">
        <p className="text-center  items-center md:w-3/5 lg:w-3/12  ">
        If you are interested in a custom plan, please reach out to us at <a href="mailto:wosom@dataplume.com" className="text-blue-500"> wosom@dataplume.com .</a>
        </p>
      </div>
    </div>
  );
};

export default Prices;
