"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GiFallingStar } from "react-icons/gi";
import { RxDoubleArrowRight } from "react-icons/rx";
const ThirdGrid = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="grid grid-cols-2 gap-4 mb-10 lg:mb-32"
    >
      <div className="rounded-3xl flex-none bg-gradient-to-r from-stone-900 to-stone-950 px-5 py-5 h-full">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="rounded-3xl h-full flex flex-col justify-center text-center text-white  bg-gradient-to-r from-stone-800 to-stone-700">
            <h1 className="text-4xl">02</h1>
            <p className="text-stone-500 text-xs">YEARS EXPERIANCE</p>
          </div>
          <div className="rounded-3xl h-full flex flex-col justify-center text-center text-white  bg-gradient-to-r from-stone-800 to-stone-700">
            <h1 className="text-4xl">+30</h1>
            <p className="text-stone-500 text-xs">CLIENTS WORLDWIDE</p>
          </div>
          <div className="rounded-3xl h-full flex flex-col justify-center text-center text-white  bg-gradient-to-r from-stone-800 to-stone-700">
            <h1 className="text-4xl">+100</h1>
            <p className="text-stone-500 text-xs">TOTAL PROJECTS</p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl flex-none bg-gradient-to-r from-stone-900 to-stone-950 px-5 py-8 h-full">
        <GiFallingStar className="text-5xl" />
        <div className="flex items-end justify-between">
          <h1 className="text-5xl text-white">
            {`Let's work`} <br />
            <span className="text-blue-700">together.</span>
          </h1>
          <h1 className="text-3xl">
            <RxDoubleArrowRight />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ThirdGrid;
