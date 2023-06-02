import React from "react";
import banner from "../../assets/hero-banner-img.png";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="w-9/12 mx-auto">
        <div className="grid grid-cols-2 gap-24 items-center">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <p className="mb-2">Summer Sale</p>
            <h2 className="text-4xl font-bold mb-2">Upto 50% Off</h2>
            <h2 className="text-4xl font-bold mb-2">New Laptops</h2>
            <p className="mt-3">
              Thank You For your Purchase.We Hope You Enjoy This Laptop .this
              Laptop is Awsome to Use
            </p>
            <Link to="/about">
              {" "}
              <button className="bg-blue-400 px-6 py-2 mt-5 text-white font-bold">
                Learn More
              </button>
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
