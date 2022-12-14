import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../UseContex/AuthProvider";

const DisplayMyProduct = ({ myProduct, handleMyProductDelete }) => {
  const { user } = useContext(AuthContext);
  const [disable, setDisable] = useState(0);
  const { _id, image, name, resellPrice, booked } = myProduct;
  const handleAdvertisement = (myProduct) => {
    console.log(myProduct);
    const {
      _id,
      categoryProduct,
      condition,
      email,
      image,
      location,
      originalPrice,
      productDetails,
      resellPrice,
      sellerName,
      time,
      useTime,
    } = myProduct;
    const advertisementProductInfo = {
      advertiseProductId: _id,
      categoryProduct,
      condition,
      email,
      image,
      location,
      originalPrice,
      productDetails,
      resellPrice,
      sellerName,
      time,
      useTime,
    };
    fetch(
      "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/advertisement",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(advertisementProductInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Start Advertisement");
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setDisable(true);
  };

  return (
    <div className="bg-gray-100 p-5 shadow-lg ">
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
                  <button
                    disabled={disable}
                    onClick={() => handleAdvertisement(myProduct)}
                    className="bg-blue-400 px-4 py-2 text-white font-bold mt-2 rounded-md"
                  >
                    AdvertiseMent
                  </button>
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
