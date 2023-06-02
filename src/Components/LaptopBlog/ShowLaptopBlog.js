import React, { useEffect, useState } from "react";
import DisplayLaptopBlog from "./DisplayLaptopBlog";

const ShowLaptopBlog = () => {
  const [laptopBlog, setLaptopBlog] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/laptopBlog")
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
      >
        <h2 className="text-4xl mb-8 font-bold text-center">laptopblog Blog</h2>
        <p className="text-center mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          tempore aperiam aliquam delectus facilis ullam maxime repellendus rem
          quae optio cum iusto dolor inventore, iste deleniti sed, deserunt
          repudiandae odio.
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        className="grid md:grid-cols-3 "
      >
        {laptopBlog?.map((blog) => (
          <DisplayLaptopBlog blog={blog} key={blog._id}></DisplayLaptopBlog>
        ))}
      </div>
    </div>
  );
};

export default ShowLaptopBlog;
