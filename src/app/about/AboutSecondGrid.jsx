"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutSecondGrid = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-4 my-4">
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="bg-base-200 rounded-3xl p-5"
      >
        <p className="text-lg mb-4">EXPERIENCE</p>
        <div>
          <p className="text-zinc-500">2022</p>
          <h4 className="text-white my-1">Programming Hero</h4>
          <p className="text-zinc-500">Student</p>
        </div>
        <div className="mt-4">
          <p className="text-zinc-500">2023-Present</p>
          <h4 className="text-white my-1">Fiverr</h4>
          <p className="text-zinc-500">Freelancer</p>
        </div>
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        className="bg-base-200 rounded-3xl p-5"
      >
        <p className="text-lg mb-4">EDUCATION</p>
        <p className="text-zinc-500">2020-present</p>
        <h4 className="text-white text-lg my-1">
          BSc in Computer Science And Engineering
        </h4>
        <p className="text-zinc-500">Daffodil International University</p>
      </div>
    </div>
  );
};

export default AboutSecondGrid;
