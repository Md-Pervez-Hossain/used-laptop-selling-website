import React from "react";

const About = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="my-32 grid grid-cols-2 items-center gap-24 ">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            How does a laptop function? Laptops combine all of the input and
            output capabilities and components of a desktop computer, including
            its display screen, keyboard, speakers, data storage, disc drives,
            and pointing devices (a touchpad or a trackpad), with a processor
            and operating system into a smaller device.
          </p>
          <button className="bg-blue-400 px-4 py-2 text-white font-bold rounded-md">
            Get Started
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="https://content.jdmagicbox.com/comp/patiala/a9/9999px175.x175.130821121516.i5a9/catalogue/the-laptop-shop-patiala-0a7zwbaajx.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
