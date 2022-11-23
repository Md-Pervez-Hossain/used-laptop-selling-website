import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllCategory from "./DisplayAllCategory";

const AllCategoryProducts = () => {
  const allProducts = useLoaderData();
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid grid-cols-4 gap-10">
        {allProducts.map((products) => (
          <DisplayAllCategory
            products={products}
            key={products._id}
          ></DisplayAllCategory>
        ))}
      </div>
    </div>
  );
};

export default AllCategoryProducts;
