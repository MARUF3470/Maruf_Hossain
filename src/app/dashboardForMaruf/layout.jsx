import React from "react";
import Sidebar from "./Sidebar";
export const metadata = {
  title: "DASHBOARD",
  description: "Dashboard for Maruf Hossain",
};
const layout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
