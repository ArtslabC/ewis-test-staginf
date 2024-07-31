import React from "react";

const ToppanServiceCard = ({ image, title, description }) => {
  return (
    <div className="border-[1px] w-full h-80 p-5 flex flex-col  items-start justify-start gap-5 bg-purple hover:drop-shadow-lg  rounded-lg group overflow-hidden  transition-all duration-150  ease-in-out ">
      <div className=" w-32 h-32 p-4 rounded-full border-[1px] border-z bg-white  group-hover:border-red transition-all duration-500 delay-75 ease-in-out group-hover:ring-2  group-hover:ring-red ">
        <img src={image} alt="" className="w-full h-full p-2 " />
      </div>
      <div className="text-xl lg:text-lg font-Poppins font-black text-[#000]">
        {title}
      </div>
      <div className="text-sm lg:text-sm font-Rubik font-light text-TextDark  text-left leading-loose">
        {description}
      </div>
    </div>
  );
};

export default ToppanServiceCard;
