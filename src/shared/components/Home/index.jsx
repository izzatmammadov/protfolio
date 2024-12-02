import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import izzat from "../../../assets/images/izzat.jpeg";
import downloadL from "../../../assets/icons/donwloading_white.png";
import downloadD from "../../../assets/icons/downloading_gray.png";
import emailL from "../../../assets/icons/email_white.png";
import emailD from "../../../assets/icons/email_gray.png";
import ThemeButton from "../Theme";
import { useTheme } from "../../../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hi there, I'm a Software Developer. . ."],
      typeSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="h-screen text-gray-800 dark:text-white bg-gray-300 dark:bg-gray-900 flex items-center justify-center"
    >
      <div className="flex sm:flex-row-reverse flex-col items-center sm:pt-0 pt-28 justify-center sm:gap-12">
        <img
          data-aos="zoom-in"
          className="sm:w-[35%] w-[80%] rounded-full border-4 border-gray-300 dark:border-gray-900"
          src={izzat}
          alt="Izzat"
        />
        <div
          data-aos="zoom-in"
          className="sm:w-2/5 w-full flex flex-col sm:px-0 px-4 sm:items-start items-center gap-4"
        >
          <h1 className="text-4xl sm:text-5xl italic">Izzat Mammadov</h1>
          <p className="text-lg italic text-justify">
            <span ref={typedRef}></span>
          </p>
          <button
            onClick={() => {
              window.location.href =
                "mailto:imamedov388@gmail.com?subject=Your subject here&body=Your message here";
            }}
            className="w-full px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-95 duration-300 shadow-sm shadow-white flex items-center justify-center gap-3"
          >
            Contact to me
            <img
              className="w-5"
              src={theme === "dark" ? emailD : emailL}
              alt="email"
            />
          </button>
          <a
            href="files/Izzat_Mammadov_CV.pdf"
            download="Izzat_Mammadov_CV.pdf"
            className="w-full px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-95 duration-300 shadow-sm shadow-white flex items-center justify-center gap-3"
          >
            Download CV
            <img
              className="w-5"
              src={theme === "dark" ? downloadD : downloadL}
              alt="download"
            />
          </a>
        </div>
      </div>
      <ThemeButton />
    </section>
  );
};

export default Home;
