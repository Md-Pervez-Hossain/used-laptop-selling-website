import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const DisplayAllCategory = ({ products }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { _id, name, resellPrice, originalPrice, image, time, booked } =
    products;
  return (
    <div>
      {isLoading ? (
        <>
          <FadeLoader
            color={"#000000"}
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <>
          {" "}
          {booked !== true && (
            <div className="bg-gray-100 p-5 shadow-xl">
              <img src={image} alt="" />
              <p className="text-2xl font-bold my-2">{name}</p>
              <p className="font-bold">
                ReSell Price :{" "}
                <span className="font-normal">{resellPrice}</span>
              </p>
              <p className="font-bold">
                Original Price :{" "}
                <span className="font-normal"> {originalPrice}</span>
              </p>
              <p className="font-bold">
                Posted : <span className="font-normal"> {time}</span>
              </p>
              <Link to={`/addproduct/${_id}`}>
                <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3">
                  Details
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayAllCategory;
