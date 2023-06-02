import React from "react";

const FeaturedProduct = () => {
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="flex flex-row gap-16">
        <div className="basis-8/12">
          <div className="relative ">
            <div
              style={{
                backgroundImage: `url("https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg")`,
              }}
              className="bg-cover bg-center bg-no-repeat transition ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 h-[250px] brightness-50"
            ></div>
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-white absolute top-16 left-4 w-9/12 items-center"
            >
              <h2 className="font-bold text-xl mb-2">Best Laptop</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                soluta modi ut necessitatibus quaerat natus in obcaecati nam
                aspernatur adipisci?
              </p>
              <button className="bg-blue-400 px-6 py-2 text-white mt-3">
                Shop
              </button>
            </div>
          </div>
        </div>
        <div className="basis-4/12">
          <div className="relative ">
            <div
              style={{
                backgroundImage: `url("https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg")`,
              }}
              className="bg-cover bg-center bg-no-repeat transition ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 h-[250px] brightness-50"
            ></div>
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-white absolute top-16 left-4  items-center"
            >
              <h2 className="font-bold text-xl mb-2">Best Laptop</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                soluta modi
              </p>
              <button className="bg-blue-400 px-6 py-2 text-white mt-3">
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
