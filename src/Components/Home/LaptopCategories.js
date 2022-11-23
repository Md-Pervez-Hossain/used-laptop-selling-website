import React from "react";

const LaptopCategories = () => {
  const categories = ["Acer", "Apple", "Asus", "Dell", "HP"];
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
      <div className="grid grid-cols-5 gap-5 text-center">
        {categories.map((category, i) => (
          <div key={i}>
            <p className="text-3xl font-bold my-5 bg-blue-400 text-white px-3 py-3 cursor-pointer">
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaptopCategories;
