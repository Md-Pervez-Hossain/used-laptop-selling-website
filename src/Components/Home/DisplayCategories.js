import React from "react";
import { Link } from "react-router-dom";

const DisplayCategories = ({ category }) => {
  const { id, BrandName, img } = category;
  return (
    <div className="bg-gray-100 p-5 shadow-xl">
      <img src={img} alt="" />
      <h2 className="text-3xl font-bold my-5">{BrandName}</h2>
      <Link to={`/addproducts/${id}`}>
        <button className="bg-blue-400 px-3 py-3 font-bold text-xl text-white">
          See More
        </button>
      </Link>
    </div>
  );
};

export default DisplayCategories;
