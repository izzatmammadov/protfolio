import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import light_mode from "../../../assets/icons/light-mode.png";
import dark_mode from "../../../assets/icons/night-mode.png";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-10 border-none outline-none w-12 h-12 rounded-full bg-white shadow-sm shadow-white flex items-center justify-center transition-transform duration-300 hover:scale-110"
    >
      {theme === "light" ? (
        <img src={dark_mode} alt="Dark Mode Icon" className="w-6 h-6" />
      ) : (
        <img src={light_mode} alt="Light Mode Icon" className="w-7 h-7" />
      )}
    </button>
  );
};

export default ThemeButton;
