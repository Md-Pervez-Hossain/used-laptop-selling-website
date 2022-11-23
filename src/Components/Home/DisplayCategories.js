import React from "react";

const DisplayCategories = ({ category }) => {
  const { id, BrandName, img } = category;
  return (
    <div className="bg-gray-100 p-5 shadow-xl">
      <img src={img} alt="" />
      <h2 className="text-3xl font-bold bg-blue-400 px-3 py-3 text-white">
        {BrandName}
      </h2>
    </div>
  );
};

export default DisplayCategories;
