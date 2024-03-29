import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const LaptopBlog = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  document.title = "Blog Page";
  const navigate = useNavigate();
  const handleBlogPost = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const title = form.title.value;
    const details = form.details.value;
    const image = form.image.files[0];
    const date = new Date().toLocaleDateString();
    const formData = new FormData();
    formData.append("image", image);

    fetch(
      "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const LaptopBlogInfo = {
          title,
          details,
          image: data?.data?.display_url,
          date,
          name: user?.displayName,
          img: user?.photoURL,
        };
        fetch(
          "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/laptopBlog",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(LaptopBlogInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              form.reset();
              setLoading(false);
              navigate("/");
            }
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className=" my-16 p-4">
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <form onSubmit={(event) => handleBlogPost(event)}>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                className="input input-bordered w-full  "
              />
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered w-full "
              />
            </div>
            <textarea
              className="textarea textarea-bordered w-full mt-5"
              placeholder="Details"
              name="details"
            ></textarea>
            <button className=" px-4 py-3 font-bold rounded-md w-full mt-4 bg-blue-400 text-white">
              Submit Blog
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default LaptopBlog;
