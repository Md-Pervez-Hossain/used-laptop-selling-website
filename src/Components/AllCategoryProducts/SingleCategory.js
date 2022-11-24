import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const SingleCategory = () => {
  const { user } = useContext(AuthContext);
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
    productDetails,

    categoryProduct,
  } = singleProduct;
  // const navigate = useNavigate();
  // navigate(`/addproducts/${productId}`);

  const handleBookNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const productname = form.productname.value;
    const price = form.price.value;
    const number = form.number.value;
    const location = form.location.value;
    console.log({ name, email, productname, price, number, location });

    const bookingInfo = {
      name,
      email,
      productname,
      price,
      number,
      location,
      image,
    };
    fetch("http://localhost:5000/buyerBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Booked");
        form.reset();
        console.log(data);
      });

    fetch(`http://localhost:5000/addproducts/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOpenModal(null);
      });
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="flex justify-center items-center bg-gray-100 p-5 gap-10 ">
        <div className="w-1/2">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="w-1/2">
          <h2 className="text-7xl font-bold mb-4 text-blue-400">{name}</h2>
          <p className="text-xl font-bold mb-2">
            Resell Price : <span className="font-normal">{resellPrice}</span>{" "}
          </p>
          <p className="text-xl font-bold mb-2">
            OriginalPrice : <span className="font-normal">{originalPrice}</span>{" "}
          </p>
          <p className="text-xl font-bold mb-2">
            Uses : <span className="font-normal">{useTime} month</span>
          </p>
          <p className="text-xl font-bold mb-2">
            Location: <span className="font-normal">{location}</span>
          </p>
          <p className="text-xl font-bold mb-2">
            Seller Name : <span className="font-normal">{sellerName}</span>
          </p>
          <p className="font-normal mb-2">{productDetails}</p>

          {/* The button to open modal */}
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
                        defaultValue={name}
                        readOnly
                        name="productname"
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full  mb-5"
                      />
                    </div>
                    <div>
                      <input
                        defaultValue={resellPrice + " BDT"}
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
                      Book Now
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

          <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3 ml-3">
            Add To WishList
          </button>
          <Link to={`/addproducts/${categoryProduct}`}>
            <button className="bg-blue-400 px-4 py-2 font-bold text-xl text-white mt-3 ml-3">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
