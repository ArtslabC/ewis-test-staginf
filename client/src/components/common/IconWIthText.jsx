/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function IconWIthText(props) {
  return (
    <>
      <div className="group flex flex-col items-center gap-5 rounded-lg bg-purple px-5 py-5 text-center h-full w-full transition-all duration-150 hover:drop-shadow-lg">
        <div className="bg-white overflow-hidden group-hover:ring-2  group-hover:ring-primary transition-all duration-300 delay-200 h-24 w-24 rounded-full flex flex-col justify-center items-center">
          <img src={props.imgURL} alt="" className="p-2 h- h-40 w-40" />
        </div>

        <h4 className="text-primary font-bold font-Poppins text-2xl">
          {props.cardTitle}
        </h4>
        <p className=" font-Rubik text-sm text-black">{props.cardDes}</p>
      </div>
    </>
  );
}

export default IconWIthText;
