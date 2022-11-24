import React from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const SingleCategory = () => {
  const singleProduct = useLoaderData();
  console.log(singleProduct);
  const {
    _id,
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
  // const navigate = useNavigate();
  // navigate(`/addproducts/${productId}`);

  const handlebook = (id) => {
    // const buyerBook = {
    //   id,
    //   name,
    //   image,
    //   resellPrice,
    //   location,
    //   sellerName,
    // };
    // fetch("http://localhost:5000/buyerBooking", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(buyerBook),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     toast.success("SuccessFully Booked");
    //     console.log(data);
    //   });
  };
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
          <Link to={`/productbooking/${_id}`}>
            <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3">
              Book Now
            </button>
          </Link>
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
