import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DisplayCategories = ({ category }) => {
  const { BrandName, img } = category;
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <Link to={`/addproducts/${BrandName}`}>
        <div className="bg-gray-100 p-5 hover:shadow-xl hover:text-blue-400  duration-500">
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "150px",
            }}
          ></div>

          <button className=" font-bold text-xl mt-3  rounded-md">
            {BrandName}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default DisplayCategories;
