import React from "react";
import NavLink from "../components/NavLink";
const Navlinks = [
  {
    path: "/dashboardForMaruf",
    title: "Dashboard",
  },
  {
    path: "/dashboardForMaruf/addProject",
    title: "Add Project",
  },
  {
    path: "/dashboardForMaruf/addBlog",
    title: "Add Blog",
  },
  {
    path: "/dashboardForMaruf/all-project",
    title: "All Project",
  },
];
const Sidebar = () => {
  return (
    <aside className="lg:mr-10">
      <h1 className="lg:text-2xl font-semibold">Dashboard</h1>
      <ul className="my-5">
        {Navlinks.map(({ path, title }) => (
          <li key={path}>
            <NavLink exact activeClassName="text-blue-500" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
