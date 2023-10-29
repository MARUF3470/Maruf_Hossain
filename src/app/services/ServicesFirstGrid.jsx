"use client";
import React, { useEffect } from "react";
import { GoNorthStar } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCodeSlash } from "react-icons/bs";
import { PiPencilCircleLight } from "react-icons/pi";
import { SiBisecthosting } from "react-icons/si";
import { RxStopwatch } from "react-icons/rx";
const ServicesFirstGrid = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid lg:grid-cols-3 justify-center items-center gap-7">
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="p-6 w-full rounded-3xl h-full bg-base-200"
      >
        <div className="lg:w-4/6 grid lg:grid-cols-1 mx-auto h-full text-white">
          <div className="flex my-5 lg:my-0 justify-between items-center">
            <PiPencilCircleLight className="text-3xl" />
            <h4 className="text-base">WEB DESIGNING</h4>
          </div>
          <div className="flex my-5 lg:my-0 justify-between items-center">
            <BsCodeSlash className="text-3xl" />
            <h4 className="text-base">DEVELOPMENT</h4>
          </div>
          <div className="flex my-5 lg:my-0 justify-between items-center">
            <SiBisecthosting className="text-3xl" />
            <h4 className="text-base">HOSTING</h4>
          </div>
          <div className="flex my-5 lg:my-0 justify-between items-center">
            <RxStopwatch className="text-3xl" />
            <h4 className="text-base">MAINTAINING</h4>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="lg:col-span-2 mt-5"
      >
        <div className="grid lg:grid-cols-2 justify-center ">
          <div className="row-span-1 col-span-2 h-fit">
            <div className=" flex justify-center items-center mb-5">
              <GoNorthStar className="text-2xl lg:text-5xl" />
              <h1 className="text-white text-3xl lg:text-7xl font-medium">
                MY OFFERINGS
              </h1>
              <GoNorthStar className="text-2xl lg:text-5xl" />
            </div>
          </div>
          <div className="row-span-2 col-span-2 p-5 bg-base-200 rounded-3xl">
            <div className="grid lg:grid-cols-2 p-3 grid-rows-2 gap-5">
              <div className="bg-base-300 p-5 rounded-3xl">
                <h5 className="text-zinc-500 font-medium uppercase">
                  Web Designing
                </h5>
                <p className="text-sm text-zinc-300 mt-2 mb-5 leading-6">
                  I provide web designing services for personal website,
                  ecommerce website, business website, bloging website and many
                  more. I try to provide user friendly website desing to my
                  clients so that they can easily maintain their websites.
                </p>
              </div>
              <div className="bg-base-300 p-5 rounded-3xl">
                <h5 className="text-zinc-500 font-medium uppercase">
                  DEVELOPMENT
                </h5>
                <p className="text-sm text-zinc-300 mt-2 mb-5 leading-6">
                  I am working as a professional web developer for the last 2
                  years. I can build modern eye catching websites for my client.
                  A good looking website put the first impression about your
                  business and your company reputation toward your audience. So
                  never compromise with that.
                </p>
              </div>
              <div className="bg-base-300 p-5 rounded-3xl">
                <h5 className="text-zinc-500 font-medium uppercase">Hosting</h5>
                <p className="text-sm text-zinc-300 mt-2 mb-5 leading-6">
                  I also help my clients to host their websites. Hosting your
                  website is the way how you present your website globally so
                  always host your site in a perfect way.
                </p>
              </div>
              <div className="bg-base-300 p-5 rounded-3xl">
                <h5 className="text-zinc-500 font-medium uppercase">
                  Maintainance
                </h5>
                <p className="text-sm text-zinc-300 mt-2 mb-5 leading-6">
                  Maintaining the website is one of the crucial part after the
                  website building is done. In website sometime people face
                  unknown issues and bugs which hamper the customers experiance.
                  I also help my customers in order to maintain their websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFirstGrid;
