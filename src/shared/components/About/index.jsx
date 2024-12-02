import React from "react";

const About = () => {
  return (
    <section id="about" className="h-full  bg-gray-300 pt-16 dark:bg-gray-900">
      <div data-aos="zoom-in" className="flex justify-evenly items-center">
        <span className="h-1 sm:w-[40%] w-[20%] bg-gray-900 dark:bg-white rounded-full"></span>
        <h2 className="text-gray-900 sm:text-4xl text-3xl text-center dark:text-white">
          About Me
        </h2>
        <span className="h-1 sm:w-[40%] w-[20%] bg-gray-900 dark:bg-white rounded-full"></span>
      </div>
      <p data-aos="fade-up" className="text-gray-900 flex items-centerh-full dark:text-white text-center text-xl sm:px-8 px-3 sm:mt-16 mt-8 leading-relaxed ">
        Hi, I'm a Frontend Developer with 3+ years of experience. I'm passionate
        about web development and I love developing user-friendly,
        high-performance and scalable applications with modern technologies. I'm
        especially specialized in React, Next.js and TypeScript. Throughout my
        career: I've created dynamic, interactive and innovative user interfaces
        in the React ecosystem. I've developed SEO-friendly, fast-loading and
        modern web applications with Next.js. I've increased code quality and
        created scalable projects using TypeScript. In the software development
        process, I aim to provide customized solutions to project needs by
        adopting modular structure, clean code principles and best practices.
        I'm prone to teamwork and adapting to new technologies is a source of
        motivation for me. As a developer who cares about user experience and is
        eager and talented in developing high-quality web applications, I'm here
        to add value to your projects.
      </p>
    </section>
  );
};

export default About;
