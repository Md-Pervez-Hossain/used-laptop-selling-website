import React from "react";
import { Link } from "react-router-dom";

const DisplayLaptopBlog = ({ blog }) => {
  console.log(blog);
  const { image, title, details, _id } = blog;
  return (
    <div className="shadow-lg p-5 ">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="bg-cover bg-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 bg-no-repeat h-[250px] w-full"
        ></div>
        <div>
          <p className="font-bold text-xl mb-3 mt-5">{title}</p>
          <p>{`${details.slice(0, 80)} ...`}</p>
          <Link to={`/laptopBlog/${_id}`}>
            <button className="bg-blue-400 text-white px-6 py-2 mt-5">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayLaptopBlog;
