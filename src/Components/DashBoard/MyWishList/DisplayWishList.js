import React from "react";

const DisplayWishList = ({ wishListProduct }) => {
  const { name, image, resellPrice } = wishListProduct;
  return (
    <div className="bg-gray-100 p-5 shadow-xl">
      <div>
        <img src={image} alt="" />
        <p className="text-3xl font-bold my-2">{name}</p>
        <p className="font-bold">
          Price : <span className="font-normal">{resellPrice} BDT</span>
        </p>
        <button className="bg-blue-400 px-4 py-2 rounded-md font-bold text-white mt-2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default DisplayWishList;
