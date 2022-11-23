import React from "react";

const DisplayAllCategory = ({ products }) => {
  const { name, resellPrice, originalPrice, image } = products;
  return (
    <div className="bg-gray-100 p-5 shadow-xl">
      <img src={image} alt="" />
      <p className="text-2xl font-bold my-2">{name}</p>
      <p className="font-bold">
        ReSell Price : <span className="font-normal">{resellPrice}</span>
      </p>
      <p className="font-bold">
        Original Price : <span className="font-normal"> {originalPrice}</span>
      </p>
      <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3">
        Details
      </button>
    </div>
  );
};

export default DisplayAllCategory;
