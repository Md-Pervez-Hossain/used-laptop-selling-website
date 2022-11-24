import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const DisplayMyProduct = ({ myProduct, handleMyProductDelete }) => {
  const { _id, image, name, resellPrice, booked } = myProduct;

  return (
    <div className="bg-gray-100 p-5 shadow-lg my-16">
      <img src={image} alt="" />
      <p className="text-3xl font-bold my-3">{name}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">
            Price : <span className="font-normal">{resellPrice}</span>
          </p>
          <h2 className="font-bold">
            <span>
              {booked === true ? (
                <>
                  <p>Sold</p>
                </>
              ) : (
                <>
                  <p className="text-blue-400">Available</p>
                </>
              )}
            </span>
          </h2>
        </div>
        <div>
          <div className="flex gap-5">
            <FaTrashAlt
              onClick={() => handleMyProductDelete(_id)}
              className="cursor-pointer text-blue-400"
            ></FaTrashAlt>
            <FaEdit className="cursor-pointer text-blue-400"></FaEdit>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMyProduct;
