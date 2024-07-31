import React from "react";

const Container = ({ children, classes = "" }) => {
  return (
    <div
      className={`max-w-screen-xl px-5 md:px-10 w-full  h-full mx-auto ${classes} `}
    >
      {children}
    </div>
  );
};

export default Container;
