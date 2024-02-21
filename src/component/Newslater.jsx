import React from "react";
// import { Link } from "react-router-dom";
const Newslater = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 to-slate-500 p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[40px]">
        <div className="m-2">
          <h1 className="font-bold text-white text-[20px] md:text-[40px]">
            {" "}
            Want to Learn latest I.T skill
          </h1>
          <span className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="m-2">
          <input
            type="text"
            className=" rounded mb-2 w-full md:w-[55%] p-2 mr-2 text-slate-300"
            placeholder="Email"
          />
          <button className="w-[35%]  my-3 bg-black text-white p-2 rounded">
            Get Started
          </button>
          <br />
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.kes <br />{" "}
            <a className="text-black">privacy policy</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
