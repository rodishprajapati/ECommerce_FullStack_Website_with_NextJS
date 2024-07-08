import { Link, useLocation } from "react-router-dom";
import React from "react";

const SideBar = () => {
  const params = useLocation();

  const sidebarItems = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },

    {
      name: "Orders",
      link: "/orders",
    },
  ];

  return (
    <>
      <div className="mt-[50px] "></div>

      {sidebarItems.map((items: any) => (
        <>
          <Link to={items.link}>
            <div
              className={`p-2 font-semibold hover:bg-gray-300 text-black ${
                params.pathname === items.link &&
                "bg-slate-800 font-bold text-white"
              }`}
            >
              {items.name}
            </div>
          </Link>
        </>
      ))}
    </>
  );
};

export default SideBar;
