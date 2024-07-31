import React from "react";
import H2Title from "./H2Title";

const SectionHeader = ({ title, description, classes = "" }) => {
  return (
    <div
      className={`text-center flex flex-col gap-5 justify-center items-center max-w-4xl  mx-auto ${classes}`}
    >
      <H2Title>{title}</H2Title>
      {description != "" && (
        <p className="font-Rubik lg:text-lg text-sm text-black font-semibold text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
