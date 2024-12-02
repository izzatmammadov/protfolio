import React from "react";

const Card = ({ img }) => {
  return (
    <div className="sm:w-[9%] w-[20%]">
      <img src={img} alt="language" />
    </div>
  );
};

export default Card;
