/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import done from "../../../assets/icon/done.webp";
import dot from "../../assets/doted.svg";

import { useState } from "react";
import { motion } from "framer-motion";

import { BoltIcon } from "@heroicons/react/24/outline";
function AccordionOne(props) {
  const [show, setShow] = useState(props.con);

  function showFun() {
    setShow(!show);
  }
  return (
    <div
      // initial={{
      //   height: 0,
      //   opacity: 0,
      // }}
      // animate={{
      //   height: "fit",
      //   opacity: 1,
      // }}
      // transition={{
      //   duration: 0.5,
      //   ease: [0.22, 1, 0.36, 1],
      // }}
      className={`flex flex-row items-start justify-start gap-5 overflow-hidden transition-all max-h-[180px] duration-500 ${
        !show ? "h-full" : "max-h-[25px]"
      }`}
    >
      <div className="flex flex-col items-center justify-start gap-2 relative">
        <div className="w-6 h-6">
          <BoltIcon className="text-primary" />
        </div>
        <div className="absolute top-8">
          <div className="flex flex-col justify-start items-start gap-[3px] ">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
              (item, i) => (
                <div
                  key={i}
                  className="w-[4px] h-[4px] bg-primary rounded-full"
                ></div>
              )
            )}
          </div>
        </div>
      </div>
      <div className={`flex flex-col items-start justify-start gap-2 h-fit   `}>
        <button
          className="text-primary font-bold font-Poppins text-xl leading-tight text-left "
          onClick={showFun}
        >
          {props.title}
        </button>
        <div className="min-h-fit">
          <motion.div className="font-Rubik  text-gray-500  text-sm text-left">
            {props.des}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AccordionOne;
