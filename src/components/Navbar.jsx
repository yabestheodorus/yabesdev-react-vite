import React from "react";
import { PiCursorFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Smart Contracts", path: "/smart-contracts" },
    { name: "DApps", path: "/dapps" },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex items-center px-8 py-8 z-20">
      <div className="flex items-center ">
        <div className="p-1.5 rounded-lg bg-primaryPurple">
          <PiCursorFill size={14} strokeWidth={1} className=" text-white" />
        </div>
        <span className="text-xl text-slate-800 font-bold ml-2 -mt-1">
          yabestheo
        </span>
        <span className="text-xl text-primaryPurple font-bold -mt-1">.dev</span>

        {/* Menu */}
        <nav className="flex items-center space-x-8 ml-8 -mt-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-semibold text-primaryPurple hover:text-purple-800 transition ${
                  isActive ? " decoration-purple-700" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
