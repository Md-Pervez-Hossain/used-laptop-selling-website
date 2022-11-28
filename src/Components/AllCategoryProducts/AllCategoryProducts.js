import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllCategory from "./DisplayAllCategory";

const AllCategoryProducts = () => {
  const allProducts = useLoaderData();
  console.log(allProducts);
  return (
    <div>
      {allProducts.length <= 0 ? (
        <>
          <p className="text-center text-5xl my-16 font-bold">
            No Products Add Yet
          </p>
        </>
      ) : (
        <div className="md:w-9/12 mx-auto my-16">
          <div className="grid md:grid-cols-4 gap-10">
            {allProducts.map((products) => (
              <DisplayAllCategory
                products={products}
                key={products._id}
              ></DisplayAllCategory>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCategoryProducts;
