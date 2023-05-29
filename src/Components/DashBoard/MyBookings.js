import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const MyBookings = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [myBooking, setMyBooking] = useState([]);
  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
  };

  return (
    <div>
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
          </div>
        </>
      ) : (
        <>
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
                      <div
                        style={{
                          backgroundImage: `url(${bookProduct?.image})`,
                        }}
                        className="bg-cover bg-center bg-no-repeat h-[80px] w-[80px] rounded-full"
                      ></div>
                    </td>
                    <td>{bookProduct.productname}</td>
                    <td>{bookProduct.price}</td>
                    <td>
                      {bookProduct?.paid === true ? (
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
                      {bookProduct?.paid === true ? (
                        <>
                          {" "}
                          <button className="bg-gray-400 px-4 py-2 text-white font-bold  rounded-md">
                            Can't Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <button
                            onClick={() => handleMyorderDelete(bookProduct._id)}
                            className="bg-blue-400 px-4 py-2 text-white font-bold  rounded-md"
                          >
                            Order Cancel
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookings;
