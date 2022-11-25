import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h2 className="text-7xl font-bold mb-4">
            Laptop For The <br /> Future
          </h2>
          <p className="mb-4">
            A laptop, laptop computer, or notebook computer is a small, portable
            personal computer with a screen and alphanumeric keyboard.
          </p>
          <button className="bg-blue-400 px-3 py-3 text-white font-bold rounded-md ">
            Book Now
          </button>
        </div>

        <div className="w-1/2">
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
