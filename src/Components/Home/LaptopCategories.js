import React from "react";
import img1 from "../../assets/hp.jpg";
import img2 from "../../assets/mackbook.jpg";
import img3 from "../../assets/dell.jpg";
import img5 from "../../assets/acer.jpg";
import DisplayCategories from "./DisplayCategories";

const LaptopCategories = () => {
  const categories = [
    {
      id: 1,
      BrandName: "HP",
      img: img1,
    },
    {
      id: 2,
      BrandName: "MacBook",
      img: img2,
    },
    {
      id: 3,
      BrandName: "Dell",
      img: img3,
    },
    {
      id: 4,
      BrandName: "Acer",
      img: img5,
    },
  ];
  return (
    <div className="w-9/12 mx-auto">
      <div>
        <h2 className="text-7xl font-bold text-center mb-10 ">
          Laptop categories
        </h2>
        <p className="text-center mb-5 ">
          Laptop Brands are Apple, Dell, Sony, Hewlett-Packard (HP), Samsung,{" "}
          <br />
          Compaq, Acer, Lenovo, Toshiba, LG, Asus, Panasonic, Alienware, Gateway
          etc.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10 text-center">
        {categories.map((category) => (
          <DisplayCategories
            key={category.id}
            category={category}
          ></DisplayCategories>
        ))}
      </div>
    </div>
  );
};

export default LaptopCategories;
