import React from "react";
import { FaArrowRight } from "react-icons/fa";
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
  console.log(advertisement);
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
      className="bg-gray-100 p-5 hover:shadow-xl duration-500"
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "150px",
        }}
      ></div>
      <p className="text-xl font-bold mb-3 mt-4">{categoryProduct}</p>
      <p className="mb-1">
        {productDetails.length >= 50 ? (
          <>{`${productDetails.slice(0, 45)} ...`}</>
        ) : (
          <>{productDetails}</>
        )}
      </p>
      <p>
        Price : <span className="font-normal"> {resellPrice} BDT</span>{" "}
      </p>

      <Link to={`/advertisement/singleProduct/${_id}`}>
        <button className=" text-blue-400 mt-3 rounded-md">
          Read More{" "}
          <FaArrowRight className="inline-block text-[12px]"></FaArrowRight>
        </button>
      </Link>
    </div>
  );
};

export default DisplayAdvertisement;
