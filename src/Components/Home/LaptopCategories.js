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
      BrandName: "Hp",
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
    <div className="md:w-9/12 mx-auto  mt-16">
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h2 className="md:text-4xl text-4xl font-bold  mb-10 ">
          Laptop categories
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-10">
        {categories?.map((category) => (
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
