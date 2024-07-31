import React from "react";

const ToppanFeatureCard = ({ image, title, description }) => {
  return (
    <div className="group flex flex-col  items-center gap-5 rounded-lg bg-purple px-5 py-5 text-center h-full w-full transition-all duration-150 hover:drop-shadow-lg">
      <div className="bg-white overflow-hidden group-hover:ring-2 w-32 h-32 p-4  group-hover:ring-red transition-all duration-300 delay-200  rounded-full flex flex-col justify-center items-center">
        <img src={image} alt="" className="p-2 h- h-40 w-40" />
      </div>
      <h4 className="text-[#000] font-bold font-Poppins text-xl">{title}</h4>
      <p className=" font-Rubik text-sm text-[#00] ">{description}</p>
    </div>
  );
};

export default ToppanFeatureCard;
