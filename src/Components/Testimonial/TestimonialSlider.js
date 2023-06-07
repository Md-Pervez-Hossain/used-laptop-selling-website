import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { TestimonialData } from "./TestimonialData";

const TestimonialSlider = () => {
  return (
    <div className=" lg:my-32 my-16">
      <h2 className="text-center text-2xl  ">Our Testimonial</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={2}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        {TestimonialData.map((info) => {
          return (
            <SwiperSlide key={info.id}>
              <section className="p-6">
                <div className="container max-w-xl mx-auto">
                  <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
                    <img
                      src={info.img}
                      alt=""
                      className="w-20 h-20 rounded-full dark:bg-gray-500"
                    />
                    <blockquote className="max-w-lg text-lg italic font-medium text-center">
                      "Et, dignissimos obcaecati. Recusandae praesentium
                      doloribus vitae? Rem unde atque mollitia!"
                    </blockquote>
                    <div className="text-center dark:text-gray-400">
                      <p>{info.name}</p>
                      <p>{` ${info.company} ${info.position}`}</p>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
