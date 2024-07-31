import React from "react";

const DiverseIndustriesBtn = ({ title, type, settype, id }) => {
  return (
    <div
      className={`${
        type === id ? "  bg-primary text-white" : " bg-white text-primary"
      } w-auto text-lg rounded-xl font-medium px-5 py-3 font-Poppins cursor-pointer text-pretty `}
      onClick={() => settype(id)}
    >
      {title}
    </div>
  );
};

export default DiverseIndustriesBtn;
