import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleCategory = () => {
  const singleProduct = useLoaderData();
  console.log(singleProduct);
  const {
    name,
    image,
    resellPrice,
    originalPrice,
    useTime,
    location,
    sellerName,
    productDetails,
    productId,
  } = singleProduct;
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="flex justify-center items-center bg-gray-100 p-5 gap-10 ">
        <div className="w-1/2">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="w-1/2">
          <h2 className="text-7xl font-bold mb-4 text-blue-400">{name}</h2>
          <p className="text-xl font-bold mb-2">
            Resell Price : <span className="font-normal">{resellPrice}</span>{" "}
          </p>
          <p className="text-xl font-bold mb-2">
            OriginalPrice : <span className="font-normal">{originalPrice}</span>{" "}
          </p>
          <p className="text-xl font-bold mb-2">
            Uses : <span className="font-normal">{useTime} month</span>
          </p>
          <p className="text-xl font-bold mb-2">
            Location: <span className="font-normal">{location}</span>
          </p>
          <p className="text-xl font-bold mb-2">
            Seller Name : <span className="font-normal">{sellerName}</span>
          </p>
          <p className="font-normal mb-2">{productDetails}</p>
          <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3">
            Book Now
          </button>
          <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3 ml-3">
            Add To WishList
          </button>
          <Link to={`/addproducts/${productId}`}>
            <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3 ml-3">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
