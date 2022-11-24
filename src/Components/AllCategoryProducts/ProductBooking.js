import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const ProductBooking = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
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
    productId,
  } = product;
  const navigate = useNavigate();

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
      });
  };

  return (
    <div className="w-9/12 mx-auto">
      <div className="flex items-center gap-10">
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-5xl font-bold text-blue-400 mb-5">
            Fill The Form For <br /> Booking
          </h2>

          {/* The button to open modal */}
          <label htmlFor="my-modal" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
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
                <label htmlFor="my-modal" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBooking;
