import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleLaptopBlog = () => {
  const laptopBlog = useLoaderData();
  console.log(laptopBlog);
  const { image, title, details } = laptopBlog;
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="bg-cover bg-center bg-no-repeat h-[400px]"
        ></div>
        <div>
          <p className="text-2xl font-bold mb-5">{title}</p>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleLaptopBlog;
