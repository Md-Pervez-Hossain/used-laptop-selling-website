import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../UseContex/AuthProvider";

const DisplayMyProduct = ({ myProduct, handleMyProductDelete }) => {
  const { user } = useContext(AuthContext);
  const [disable, setDisable] = useState(0);
  const { _id, image, name, resellPrice, booked, advertiseMent } = myProduct;
  const handleAdvertisement = (myProduct) => {
    console.log(myProduct);

    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/addproducts/${myProduct?._id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Advertisement Start");
        }
      })
      .catch((error) => {
        console.log(error);
      });

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
  };

  return (
    <div className="bg-gray-100 p-5 shadow-lg ">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="bg-cover bg-center bg-no-repeat h-[100px]"
      ></div>

      <p className="text-xl font-bold my-3">{name}</p>
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
          {booked === true ? (
            <></>
          ) : (
            <>
              {advertiseMent === false ? (
                <>
                  <button
                    onClick={() => handleAdvertisement(myProduct)}
                    className="bg-blue-400 px-4 py-2 text-white font-bold mt-2 rounded-md"
                  >
                    AdvertiseMent
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-gray-400 px-4 py-2 text-white font-bold mt-2 rounded-md">
                    Advertised
                  </button>
                </>
              )}
            </>
          )}
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
