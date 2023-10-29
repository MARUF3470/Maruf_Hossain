"use client";
import Lottie from "lottie-react";
import dashbpardAnimation from "../../assets/dashboard.json";
import React from "react";

const page = () => {
  return (
    <div>
      <h3 className="text-center text-2xl text-white font-medium">
        Welcome Maruf
      </h3>
      <Lottie
        className="w-[60%] mx-auto"
        animationData={dashbpardAnimation}
        loop={true}
      />
    </div>
  );
};

export default page;
