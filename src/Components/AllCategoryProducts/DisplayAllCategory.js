import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
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
          {booked === true ? (
            <></>
          ) : (
            <>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="bg-gray-100 p-5 shadow-xl"
              >
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "200px",
                  }}
                ></div>

                <p className="text-2xl font-bold mb-2 mt-3">{name}</p>
                <p className="font-bold">
                  Price : <span className="font-normal">{resellPrice} BDT</span>
                </p>

                <Link to={`/addproduct/${_id}`}>
                  <div className="flex items-center gap-1">
                    <button className="font-bold  ">Details</button>
                    <FaArrowRight className="text-[12px]"></FaArrowRight>
                  </div>
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayAllCategory;
