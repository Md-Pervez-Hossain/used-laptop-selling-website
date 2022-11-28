import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [myBooking, setMyBooking] = useState([]);
  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/buyerBooking/${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyBooking(data);
      });
  }, [user?.email]);

  const handleMyorderDelete = (id) => {
    const agree = window.confirm("Are You Sure ? You Want to Delete");
    if (agree) {
      fetch(
        `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/mybooking/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Order Cancel");
            const remainingBooking = myBooking.filter(
              (remaining) => remaining._id !== id
            );
            setMyBooking(remainingBooking);
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }

    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/productupdate/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myBooking?.map((bookProduct, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <img src={bookProduct.image} alt="" className="h-24" />
                </td>
                <td>{bookProduct.productname}</td>
                <td>{bookProduct.price}</td>
                <td>
                  {bookProduct.paid === true ? (
                    <>
                      {" "}
                      <Link>
                        <button className="bg-blue-400 px-4 py-2 text-white font-bold rounded-md ">
                          Paid
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={`/dashboard/payment/${bookProduct._id}`}>
                        <button className="bg-blue-400 px-4 py-2 text-white font-bold rounded-md ">
                          Pay
                        </button>
                      </Link>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleMyorderDelete(bookProduct._id)}
                    className="bg-blue-400 px-4 py-2 text-white font-bold  rounded-md"
                  >
                    Order Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
