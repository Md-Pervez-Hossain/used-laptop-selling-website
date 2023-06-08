import React, { useEffect, useState } from "react";
import DisplayLaptopBlog from "./DisplayLaptopBlog";

const ShowLaptopBlog = () => {
  const [laptopBlog, setLaptopBlog] = useState([]);
  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/laptopBlog"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLaptopBlog(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-9/12 mx-auto my-16">
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="w-1/2 mx-auto"
      ></div>
      <h2 className="text-4xl mb-10 font-bold ">laptopblog Blog</h2>
      <div
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="grid md:grid-cols-2 gap-24 "
      >
        {laptopBlog?.map((blog) => (
          <DisplayLaptopBlog blog={blog} key={blog._id}></DisplayLaptopBlog>
        ))}
      </div>
    </div>
  );
};

export default ShowLaptopBlog;
