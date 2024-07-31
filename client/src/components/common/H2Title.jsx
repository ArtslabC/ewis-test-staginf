import React from "react";

const H2Title = ({ children, classes = "", align = "text-center" }) => {
  return (
    <h2
      className={` ${classes} text-primary font-bold ${align} font-Poppins lg:text-3xl text-2xl leading-tight`}
    >
      {children}
    </h2>
  );
};

export default H2Title;
