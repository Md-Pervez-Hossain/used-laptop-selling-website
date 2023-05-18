import React from "react";
import Login from "../Login/Login";

const HeroBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"
            >
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold  text-white sm:text-4xl sm:leading-none">
                Tech moves fast! Stay ahead <br /> of the curve
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                A laptop is a computer designed for portability. Laptops are
                usually less than 3 inches thick, weigh less than 5 pounds and
                can be powered by a battery. As such laptops are designed for
                low power consumption and are most often used when space is
                limited, such as on an airplane.
              </p>

              <button className="px-8 py-3 bg-blue-400 text-white rounded-md">
                Learn More
              </button>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <Login></Login>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
