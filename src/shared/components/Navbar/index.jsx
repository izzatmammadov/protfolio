import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleSetActive = (section) => {
    setActive(section);
  };

  return (
    <nav className="fixed z-50 top-0 left-0 w-full bg-white text-gray-900 p-4 flex sm:flex-nowrap flex-wrap justify-center space-x-3 sm:space-x-8 dark:bg-gray-800 dark:text-white ">
      {[
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Experience", id: "experience" },
        { name: "Contact", id: "contact" },
      ].map((item) => (
        <Link
          data-aos="fade-down"
          key={item.id}
          to={item.id}
          smooth={true}
          duration={500}
          offset={-55}
          onClick={() => handleSetActive(item.id)}
          className={`cursor-pointer hover:scale-110 duration-300 transition-all px-3 py-2 rounded-full dark:bg-gray-800  ${
            active === item.id
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-800"
              : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
