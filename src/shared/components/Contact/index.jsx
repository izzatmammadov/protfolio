import React, { useState } from "react";
import sendL from "../../../assets/icons/send_white.png";
import sendG from "../../../assets/icons/send_gray.png";
import { useTheme } from "../../../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <section
      id="contact"
      className="h-screen bg-gray-300 py-16 dark:bg-gray-900"
    >
      <div data-aos="zoom-in" className="flex justify-evenly items-center">
        <span className="h-1 sm:w-[40%] w-[20%] bg-gray-900 dark:bg-white rounded-full"></span>
        <h2 className="text-gray-900 sm:text-4xl text-3xl text-center dark:text-white">
          Contact
        </h2>
        <span className="h-1 sm:w-[40%] w-[20%] bg-gray-900 dark:bg-white rounded-full"></span>
      </div>
      <p
        data-aos="fade-down"
        className="text-center my-14 text-lg text-gray-900 px-2 dark:text-white"
      >
        Please contact me directly at {""}
        <a
          className="italic underline hover:text-gray-500 duration-300"
          href="mailto:imamedov388@gmail.com"
        >
          imamedov388@gmail.com
        </a>{" "}
        or through the form below.
      </p>
      <div
        data-aos="zoom-in"
        className="flex flex-col gap-4 sm:w-1/2 sm:px-0 px-4 mx-auto"
      >
        <input
          className={`h-14 p-2 outline-none rounded shadow ${
            emailError ? "border-red-500" : "shadow-gray-300"
          }`}
          placeholder="Your e-mail address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => validateEmail(email)}
        />
        {emailError && (
          <p className="text-red-500 text-sm">{emailError}</p>
        )}
        <textarea
          className="h-48 p-2 capitalize outline-none rounded shadow shadow-gray-300"
          placeholder="Your message"
        ></textarea>
        <a
          className="flex text-white text-lg bg-gray-900 dark:bg-white dark:text-gray-900 sm:w-max w-full justify-center py-2 px-6 rounded-full ml-auto shadow shadow-white items-center gap-1 group hover:scale-95 duration-300"
          href="mailto:imamedov388@gmail.com"
        >
          SUBMIT{" "}
          <img
            className="w-3 group-hover:animate-bounce duration-300"
            src={theme === "dark" ? sendG : sendL}
            alt="send"
          />
        </a>
      </div>
      <p className="italic text-sm text-center mt-14 text-gray-900 dark:text-white">
        2024 "All rights reserved"
      </p>
    </section>
  );
};

export default Contact;
