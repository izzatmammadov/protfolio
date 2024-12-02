import React from "react";
import ExpCard from "../ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="sm:h-screen h-full py-16 sm:mb-60 bg-gray-300 dark:bg-gray-900 "
    >
      <div
        data-aos="zoom-in"
        className="flex justify-evenly items-center mb-12"
      >
        <span className="h-1 sm:w-[40%] w-[20%] bg-gray-900 dark:bg-white rounded-full"></span>
        <h2 className="text-gray-900 sm:text-4xl text-3xl text-center dark:text-white">
          Experience
        </h2>
        <span className="h-1 sm:w-[40%] w-[20%] bg-gray-900 dark:bg-white rounded-full"></span>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-10 p-5 ">
        <ExpCard
          workplace={"EA Camp School"}
          duration={"April 2023 - October 2024"}
          role={"Frontend Developer & Instructor"}
          workstyle={"Full-time"}
          description={`I worked on a campus where I actively coded in React and Next.js while also teaching frontend programming to groups of students. I shared practical knowledge and insights through collaborative lessons, focusing on building modern and scalable web applications. My role involved both hands-on development and guiding students to improve their coding skills systematically.`}
          responsibilities={[
            "Developing scalable web applications using React and Next.js.",
            "Conducting group lessons and workshops on core frontend concepts.",
            "Mentoring by reviewing their code and guiding them in project-based learning.",
          ]}
        />

        <ExpCard
          workplace={"EYTSOFT A. Ş"}
          duration={"March 2022 - July 2024"}
          role={"React Developer"}
          workstyle={"Remote"}
          description={`I contributing to projects by coding in React and supporting development tasks. I created utility functions to streamline workflows and improve code efficiency for other developers. Additionally, I shared my custom features and solutions with the team, fostering collaboration and enhancing overall productivity. My role focused on both coding and team-oriented problem-solving.`}
          responsibilities={[
            "Writing and maintaining React components and application features.",
            "Developing reusable utility functions to support other developers.",
            "Collaborating with the team to share solutions and optimize code efficiency.",
          ]}
        />

        <ExpCard
          workplace={"Freelancer"}
          duration={"March 2022 - August 2023"}
          role={"React & Next.js Developer"}
          workstyle={"Part-time"}
          description={`I worked as a freelancer, creating websites and solving issues for individuals and small businesses from different countries through various freelance platforms. I tailored web solutions based on client requirements, ensuring functionality and user-friendly design. My role involved analyzing problems, implementing fixes, and delivering custom websites.`}
          responsibilities={[
            "Designing and developing customized websites based on client specifications.",
            "Troubleshooting and resolving technical issues for existing websites.",
            "To understand their needs and delivering tailored solutions.",
          ]}
        />

        <ExpCard
          workplace={"Developia Engineering Academy"}
          duration={"December 2021 - March 2022"}
          role={"Internship - Frontend Developer"}
          workstyle={"Hybrid"}
          description={`I gained practical experience in web development, learning modern frontend technologies and tools. I had the opportunity to work on real-world projects, which helped me adapt to professional workflows and standards. This experience not only strengthened my technical abilities but also boosted my confidence in tackling frontend challenges.`}
          responsibilities={[
            "Developing frontend components for various projects.",
            "Participating in code reviews and implementing feedback.",
            "Collaborating with the team to complete project tasks.",
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
