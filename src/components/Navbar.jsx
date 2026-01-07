import React, { useEffect, useState } from "react";
import { PiCursorFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user has scrolled down more than 10px
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portofolio", path: "/portofolio" },
    { name: "Services", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="sticky top-0 w-full z-50">
      <div
        className={`flex items-center px-8 py-8  ${
          scrolled ? "bg-white/75 border-b backdrop-blur-lg " : " bg-white/15 "
        }   duration-100 border-slate-300`}
      >
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
