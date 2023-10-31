/* eslint-disable @next/next/no-async-client-component */
"use client";
import { GoNorthStar } from "react-icons/go";
import Project from "./Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProjectPage = async () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-cache",
  });
  const result = await data.json();
  return (
    <div className="grid lg:grid-cols-3 gap-7 my-20">
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="card row-span-2 h-fit rounded-3xl p-5 bg-gradient-to-r from-base-200 to-base-300 shadow-xl"
      >
        <Project project={result[0]} />
      </div>
      <div className="lg:col-span-2 h-fit">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex justify-center items-center"
        >
          <GoNorthStar className="text-2xl lg:text-5xl" />
          <h1 className="text-white text-3xl lg:text-7xl font-medium">
            ALL PROJECTS
          </h1>
          <GoNorthStar className="text-2xl lg:text-5xl" />
        </div>
      </div>
      {result[1] && (
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="card row-span-2 h-fit rounded-3xl p-5 bg-gradient-to-r from-base-200 to-base-300 shadow-xl"
        >
          <Project project={result[1]} />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
