import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllCategory from "./DisplayAllCategory";
import { useEffect } from "react";

const AllCategoryProducts = () => {
  const [loading, setLoading] = useState(false);

  const allProducts = useLoaderData();
  console.log(allProducts);

  return (
    <div>
      {loading ? (
        <>
          {" "}
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
          </div>
        </>
      ) : (
        <>
          {" "}
          {allProducts.length <= 0 ? (
            <>
              <p className="text-center text-5xl my-16 font-bold">
                No Products Add Yet
              </p>
            </>
          ) : (
            <div className="md:w-9/12 mx-auto my-16">
              <div className="grid md:grid-cols-4 gap-10">
                {allProducts
                  ?.filter((category) => category?.booked !== true)
                  .map((products) => (
                    <DisplayAllCategory
                      products={products}
                      key={products._id}
                    ></DisplayAllCategory>
                  ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllCategoryProducts;
