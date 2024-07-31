import React from "react";

const Paragraph = ({ children, classes = "", align = "text-center" }) => {
  return (
    <p
      className={`  font-Rubik lg:text-lg text-sm text-black font-semibold ${align} ${classes}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
