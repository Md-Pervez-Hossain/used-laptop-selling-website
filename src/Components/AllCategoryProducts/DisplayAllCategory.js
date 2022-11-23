import React from "react";
import { Link } from "react-router-dom";

const DisplayAllCategory = ({ products }) => {
  const { _id, name, resellPrice, originalPrice, image } = products;
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
      <Link to={`/addproduct/${_id}`}>
        <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3">
          Details
        </button>
      </Link>
    </div>
  );
};

export default DisplayAllCategory;
