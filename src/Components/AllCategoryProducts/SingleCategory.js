import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const SingleCategory = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [disable, setDisable] = useState(0);
  const [userVerified, setUserVarified] = useState({});
  const [userEmail, setUserEmail] = useState({});
  const [openModal, setOpenModal] = useState(null);
  const singleProduct = useLoaderData();
  console.log(singleProduct);
  const {
    _id,
    name,
    image,
    resellPrice,
    originalPrice,
    useTime,
    location,
    sellerName,
    email,
    productDetails,
    categoryProduct,
  } = singleProduct;
  console.log(singleProduct);

  const handleBookNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const productname = form.productname.value;
    const price = form.price.value;
    const number = form.number.value;
    const location = form.location.value;

    const bookingInfo = {
      bookingId: _id,
      name,
      email: user?.email,
      productname,
      price,
      number,
      location,
      image,
      sellerEmail: email,
      sellerName,
    };
    console.log(bookingInfo);
    fetch(
      "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/buyerBooking",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Booked");
        form.reset();
        console.log(data);
      });

    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/addproducts/${_id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOpenModal(null);
      });
  };

  const handleWishList = (id) => {
    const wishList = {
      name,
      image,
      resellPrice,
      originalPrice,
      useTime,
      location,
      sellerName,
      productDetails,
      categoryProduct,
      email: user?.email,
    };

    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/wishlist/${user?.email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(wishList),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Added To WishList");
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setDisable(true);
  };

  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/users/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserVarified(data);
      });
  }, [email]);

  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/user/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserEmail(data);
      });
  }, [user?.email]);
  console.log(userEmail);
  return (
    <div className="md:w-9/12 mx-auto my-16">
      <div className="flex flex-col md:flex-row justify-center items-center  p-5 gap-10 ">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className="md:w-1/2"
        >
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="bg-cover bg-no-repeat bg-center h-[400px]"
          ></div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className="md:w-1/2"
        >
          <h2 className="md:text-3xl text-5xl font-bold mb-4 ">
            {categoryProduct}
          </h2>
          <p className="font-normal mb-2">{productDetails}</p>
          <p className=" font-bold ">
            Resell Price : <span className="font-normal">{resellPrice}</span>{" "}
          </p>
          <p className="font-bold ">
            OriginalPrice : <span className="font-normal">{originalPrice}</span>{" "}
          </p>
          <p className="font-bold ">
            Uses : <span className="font-normal">{useTime} month</span>
          </p>
          <p className=" font-bold ">
            Location: <span className="font-normal">{location}</span>
          </p>
          {userVerified?.status === "verified" ? (
            <>
              <p className=" font-bold ">
                Seller Name:{" "}
                <span className="font-normal">
                  {sellerName}
                  <FaCheckCircle className="inline-block text-blue-400"></FaCheckCircle>
                </span>
              </p>
            </>
          ) : (
            <>
              <p className=" font-bold ">
                Seller Name: <span className="font-normal">{sellerName}</span>
              </p>
            </>
          )}

          {userEmail?.role === "Buyer" || userEmail?.role === "Seller" ? (
            <>
              <label htmlFor="Booking-modal" className="btn">
                Book Now
              </label>
              {/* Put this part before </body> tag */}
              {openModal === null && (
                <>
                  <input
                    type="checkbox"
                    id="Booking-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h2 className="text-4xl font-bold my-3 text-blue-400">
                        Fill The Form For <br /> Booking
                      </h2>
                      <form onSubmit={handleBookNow}>
                        <div>
                          <input
                            defaultValue={user?.displayName}
                            readOnly
                            required
                            name="name"
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full  mb-5"
                          />
                        </div>
                        <div>
                          <input
                            defaultValue={user?.email}
                            readOnly
                            required
                            name="email"
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full mb-5 "
                          />
                        </div>
                        <div>
                          <input
                            defaultValue={categoryProduct}
                            readOnly
                            name="productname"
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full  mb-5"
                          />
                        </div>
                        <div>
                          <input
                            defaultValue={resellPrice}
                            readOnly
                            name="price"
                            type="text"
                            placeholder="Price"
                            className="input input-bordered w-full  mb-5"
                          />
                        </div>
                        <div>
                          <input
                            name="number"
                            type="text"
                            placeholder="Enter Your Number"
                            className="input input-bordered w-full  mb-5"
                          />
                        </div>
                        <div>
                          <input
                            name="location"
                            type="text"
                            placeholder="Enter Meeting Location"
                            className="input input-bordered w-full  mb-5"
                          />
                        </div>
                        <button className="bg-blue-400 px-3 py-3 text-white font-bold w-full rounded-md">
                          Book Nowwwww
                        </button>
                      </form>
                      <div className="modal-action">
                        <label htmlFor="Booking-modal" className="btn">
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={() => handleWishList(_id)}
                disabled={disable}
                className="bg-blue-400 px-4 py-2 font-bold text-xl rounded-md text-white mt-3 ml-3"
              >
                Add To WishList
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
