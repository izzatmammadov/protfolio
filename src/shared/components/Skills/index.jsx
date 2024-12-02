import React from "react";
import Card from "../CardSkill";
import html from "../../../assets/images/html5.png";
import css from "../../../assets/images/css3.png";
import js from "../../../assets/images/js.jpg";
import sass from "../../../assets/images/sass.png";
import bootstrap from "../../../assets/images/bootstrap.jpg";
import firebase from "../../../assets/images/fireBase.svg";
import react from "../../../assets/images/react.png";
import vite from "../../../assets/images/vite.png";
import redux from "../../../assets/images/redux.png";
import tailwind from "../../../assets/images/tailwind.png";
import mui from "../../../assets/images/mui.svg";
import typescript from "../../../assets/images/typescript.svg";
import next from "../../../assets/images/next.svg";
import ant from "../../../assets/images/ant.png";
import node from "../../../assets/images/nodejs.png";
import mongo from "../../../assets/images/mongo.svg";
import mysql from "../../../assets/images/mySql.png";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The Skills component renders a section with a title and a list of skills, each
 * represented by a Card component with an image of the skill's logo.
 *
/******  25ba2e65-5258-463a-854f-a8f0b208020f  *******/const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen bg-gray-300 pt-16 dark:bg-gray-900"
    >
      <div data-aos="zoom-in" className="flex justify-evenly items-center">
        <span className="h-1 sm:w-[40%] w-[20%] bg-gray-900 dark:bg-white rounded-full"></span>
        <h2 className="text-gray-900 sm:text-4xl text-3xl text-center dark:text-white">
          My Skills
        </h2>
        <span className="h-1 sm:w-[40%] w-[20%] bg-gray-900 dark:bg-white rounded-full"></span>
      </div>
      <div
        data-aos="fade-up"
        className="-z-10 flex items-center flex-wrap justify-center gap-5 p-5 h-full"
      >
        <Card img={html} />
        <Card img={css} />
        <Card img={js} />
        <Card img={sass} />
        <Card img={bootstrap} />
        <Card img={firebase} />
        <Card img={react} />
        <Card img={vite} />
        <Card img={redux} />
        <Card img={tailwind} />
        <Card img={mui} />
        <Card img={typescript} />
        <Card img={next} />
        <Card img={ant} />
        <Card img={node} />
        <Card img={mongo} />
        <Card img={mysql} />
      </div>
    </section>
  );
};

export default Skills;
