import React from "react";
/**
 *
 * @param {card} accepts card:{icon, title,desc}
 * @returns
 */
const SolutionCard = ({ card }) => {
  return (
    <div className="bg-contactbg rounded-xl p-5 flex flex-col gap-4 items-center text-center h-full group ">
      <div className="w-full flex flex-col items-center justify-center bg-white p-10 rounded-md overflow-hidden">
        <div className="transition-all duration-700 delay-100 h-full scale-75 group-hover:scale-100">
          <img src={card.icon} alt="" />
        </div>
      </div>
      <h2 className="text-primary font-bold font-Poppins text-xl leading-tight text-center">
        {card.title}
      </h2>
      <p className="font-Rubik  text-gray-500  text-sm text-center">
        {card.desc}
      </p>
    </div>
  );
};

export default SolutionCard;
