import React from "react";

const DrawerCard = ({ service, handleDrawer, activeDrawerIndex, index }) => {
  return (
    <div
      style={{
        zIndex: 20 + index,
      }}
      className={`${
        activeDrawerIndex == service.key
          ? "max-h-[500px] lg:max-h-[unset] lg:w-full bg-blacks transition-all duration-[1s] overflow-hidden"
          : "max-h-[56px] lg:max-h-[unset] lg:w-[100px]  overflow-hidden transition-all duration-[1s]"
      }
 lg:min-w-[100px]
  ${service.key != 3 && "border-b lg:border-b-0  border-gray-300 "}
${service.key != 0 && " lg:border-l border-gray-300 "}
`}
    >
      <div
        className={`h-full lg:flex-grow flex flex-col lg:flex-row bg-white
 lg:min-w-[550px]
`}
      >
        <button
          onClick={() => handleDrawer(service.key)}
          className="flex w-full justify-between gap-5 h-14 lg:h-full lg:min-w-[100px] lg:w-[100px]  items-center p-5 lg:p-10   "
        >
          <div className="flex lg:flex-col lg:h-full justify-between gap-5 bg-white ">
            <span className="font-Rubik lg:text-lg text-sm text-black font-semibold">
              {service.id}
            </span>
            <p className="font-Rubik lg:text-lg text-sm text-black font-semibold side rotate-text">
              {service.title}
            </p>
          </div>
          <div
            className={`${
              service.key == activeDrawerIndex ? "rotate-0" : "rotate-90"
            } text-2xl font-bold float-end cursor-pointer text-black lg:hidden`}
          >
            {">"}
          </div>
        </button>
        <div className="flex-grow flex flex-col justify-between lg:min-w-[500px]  p-5 lg:p-10 pt-0 lg:pt-10 lg:pl-0">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-primary font-bold font-Poppins lg:text-3xl text-2xl leading-tight">
              {service.title}
            </h1>
            <p className="font-Rubik lg:text-lg text-sm text-black font-semibold">
              {service.desc}
            </p>
          </div>
          <div className=" h-full max-h-[350px] bg-primary md:w-[420px] xl:w-[550px] overflow-hidden mt-5">
            <img
              src={service.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerCard;
