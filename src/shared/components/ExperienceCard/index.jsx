import React from "react";

const ExpCard = ({
  workplace,
  duration,
  role,
  workstyle,
  description,
  responsibilities,
}) => {
  return (
    <div data-aos="fade-up" className="flex flex-col gap-6 sm:w-[48%] w-full rounded shadow-md shadow-white dark:shadow-gray-800 bg-white text-gray-900 dark:bg-gray-800 dark:text-white p-5">
      <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-2">
        <div className="flex flex-col sm:items-start items-center">
          <p className="text-2xl italic mb-2 sm:text-start text-center">{workplace}</p>
          <p className="italic">{role}</p>
        </div>
        <div className="flex flex-col sm:items-start items-center">
          <p>{duration}</p>
          <p className="sm:ml-auto">{workstyle}</p>
        </div>
      </div>
      <p className="text-justify">{description}</p>
      <div className="flex flex-col">
        <p className="mb-2 clear text-orange-500">Key Responsibilities:</p>
        {responsibilities.map((item, index) => (
          <li className="list-disc" key={index}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ExpCard;
