import React from "react";
import { Link } from "react-router-dom";

const DisplayAdvertisement = ({ advertisement }) => {
  const {
    _id,
    name,
    image,
    resellPrice,
    originalPrice,
    location,
    useTime,
    sellerName,
    categoryProduct,
    productDetails,
    email,
    time,
  } = advertisement;
  return (
    <div className="bg-gray-100 p-5 shadow-xl">
      <img src={image} alt="" />
      <p className="text-3xl font-bold my-2">{name}</p>
      <p className="font-bold">
        Resell Price : <span className="font-normal"> {resellPrice}</span>{" "}
      </p>
      <p className="font-bold">
        Original Price : <span className="font-normal">{originalPrice}</span>{" "}
      </p>
      <Link to={`/addproduct/${_id}`}>
        <button className="bg-blue-400 px-3 py-3 font-bold text-xl text-white mt-3 rounded-md">
          Details
        </button>
      </Link>
    </div>
  );
};

export default DisplayAdvertisement;
