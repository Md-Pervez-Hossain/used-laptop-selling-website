import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero my-32 ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <img
            src="https://www.business-in-guangzhou.com/wp-content/uploads//2014/01/Stores-on-the-1st-Floor-of-Guangzhou-Xiyang-Second-hand-Computer-Market-2-1024x764.jpg"
            className="md:max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              How does a laptop function? Laptops combine all of the input and
              output capabilities and components of a desktop computer,
              including its display screen, keyboard, speakers, data storage,
              disc drives, and pointing devices (a touchpad or a trackpad), with
              a processor and operating system into a smaller device.
            </p>
            <button className="bg-blue-400 px-4 py-2 text-white font-bold rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
