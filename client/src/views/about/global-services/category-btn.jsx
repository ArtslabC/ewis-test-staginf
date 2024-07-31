import React from "react";

const CategoryBtn = ({ activeCategory, category, filterByCategory }) => {
  return (
    <button
      className={`${
        activeCategory === category
          ? "bg-primary text-white"
          : "bg-primarygray text-blackFooter"
      } px-6 py-4 rounded-xl font-Rubik text-sm font-bold`}
      onClick={() => filterByCategory(category)}
    >
      {category}
    </button>
  );
};

export default CategoryBtn;
