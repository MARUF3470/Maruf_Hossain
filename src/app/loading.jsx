"use client";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animation_lo1tdxae.json";

const loading = () => {
  return (
    <Lottie
      className="w-[60%] mx-auto"
      animationData={loadingAnimation}
      loop={true}
    />
  );
};

export default loading;
