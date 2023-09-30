import React from "react";
import AboutFirstGrid from "./AboutFirstGrid";
import AboutSecondGrid from "./AboutSecondGrid";
import AboutThirdGrid from "./AboutThirdGrid";

export const metadata = {
  title: "ABOUT",
  description: "Portfolio of Maruf Hossain",
};

const AboutPage = () => {
  return (
    <div>
      <AboutFirstGrid />
      <AboutSecondGrid />
      <AboutThirdGrid />
    </div>
  );
};

export default AboutPage;
