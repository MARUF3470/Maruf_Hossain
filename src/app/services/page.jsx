import React from "react";
import ServicesFirstGrid from "./ServicesFirstGrid";
import AboutThirdGrid from "../about/AboutThirdGrid";

export const metadata = {
  title: "SERVICES",
  description: "Portfolio of Maruf Hossain",
};

const ServicesPage = () => {
  return (
    <div className="my-20">
      <ServicesFirstGrid />
      <AboutThirdGrid />
    </div>
  );
};

export default ServicesPage;
