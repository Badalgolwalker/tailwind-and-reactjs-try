import React from "react";
import { FaRegUser, FaServer } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const plans = () => {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-2xl h-[500px] my-4 bg-gray-200 hover:scale-105 duration-300 flex flex-col items-center justify-center gap-4">
          <FaRegUser className="text-4xl font-bold" />
          <h2 className="text-2xl font-semibold">Full stack Web Development</h2>
          <h1 className="text-3xl font-bold">Mind Ke sath Sikho</h1>

          <p>Lorem, ipsum dolor.</p>
          <p className="ml-10 w-[85%] border border-slate-300 p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, veniam!
          </p>
          <p className="ml-10 w-[85%] border border-slate-300 p-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="w-[35%]  my-3 bg-black text-white p-2 rounded">
            Get Started
          </button>
        </div>
        <div className="shadow-2xl h-[500px] my-4  bg-gray-200 hover:scale-105 duration-300 flex flex-col items-center justify-center gap-4">
          <SiFrontendmentor className="text-4xl font-bold" />
          <h2 className="text-2xl font-semibold">Frontend Development</h2>
          <h1 className="text-3xl font-bold">Thinking Ke sath Sikho</h1>
         
          <p>Lorem, ipsum dolor.</p>
          <p className="ml-10 w-[85%] border border-slate-300 p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, veniam!
          </p>
          <p className="ml-10 w-[85%] border border-slate-300 p-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="w-[35%]  my-3 bg-black text-white p-2 rounded">
            Get Started
          </button>
        </div>
        <div className="shadow-2xl h-[500px] my-4  bg-gray-200 hover:scale-105 duration-300 flex flex-col items-center justify-center gap-4">
          <FaServer className="text-4xl font-bold" />
          <h2 className="text-2xl font-semibold">Backend Development</h2>
          <h1 className="text-3xl font-bold">Logic Ke sath Sikho</h1>
          <p>Lorem, ipsum dolor.</p>
          <p className="ml-10 w-[85%] border border-slate-300 p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, veniam!
          </p>
          <p className="ml-10 w-[85%] border border-slate-300 p-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="w-[35%]  my-3 bg-black text-white p-2 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default plans;
