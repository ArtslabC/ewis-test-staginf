import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="group flex flex-col items-center gap-5 rounded-lg bg-contactbg p-8 text-center h-full w-full transition-all duration-150 hover:drop-shadow-lg">
      <div className="bg-white overflow-hidden group-hover:ring-2  group-hover:ring-primary transition-all duration-300 delay-200 h-36 w-36 rounded-full flex flex-col justify-center items-center">
        <img src={image} alt="" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-primary font-bold font-Poppins text-2xl">
          {title}
        </h4>
        <p className=" font-Rubik text-sm text-black">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
