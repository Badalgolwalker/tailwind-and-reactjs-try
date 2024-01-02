import React from "react";
import I1 from "../assets/i1.webp";

const laptop = () => {
  return (
    <div className="p-2 md:grid grid-cols-2 max-w-[1240px] mx-auto my-10 ">
      <div className="border  col-span-1 md:w-[70%] text-center">
        <img className="inline" src={I1} alt="" />
      </div>
      <div className="border  col-span-1 flex flex-col justify-center">
        <h1 className="text-2xl font-bold my-2 text-[#00df9a] font">
          Learn From  different resouces
        </h1>
        <p className="my-2 text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          qui, molestias quas quod eum excepturi perspiciatis labore provident,
          mollitia unde architecto saepe repellat sit deleniti!
        </p>
        <button className="w-[30%]  my-3 bg-black text-white p-3 rounded">
          Get Started
        </button>
      </div>
      {/* hello  */}
    </div>
  );
};

export default laptop;
