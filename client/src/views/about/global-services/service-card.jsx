import React from "react";

const Service = ({ item }) => {
  return (
    <div
      key={item.id}
      className="bg-white rounded-xl p-5 flex flex-col gap-4 items-center group"
    >
      <div className="w-full">
        <div className="bg-background-secondary rounded-full px-3 py-1 font-Poppins text-xs w-fit">
          {item.category}
        </div>
      </div>
      <div className="w-full rounded-xl overflow-hidden bg-primary p-2">
        <img
          src={item.img}
          alt=""
          className="w-full object-contain transition-all duration-150 group-hover:rotate-6 group-hover:scale-105 aspect-[3/2] "
        />{" "}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-primary font-bold font-Poppins text-lg leading-3 text-center w-full">
          {item.name}
        </h2>
        <h2 className="text-primary font-bold font-Poppins text-lg leading-3 text-center w-full">
          {item.Sname}
        </h2>
      </div>

      <p className="font-Rubik  text-gray-600  text-sm text-center">
        {item.des}
      </p>
    </div>
  );
};

export default Service;
