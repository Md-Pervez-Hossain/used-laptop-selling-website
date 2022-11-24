import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../UseContex/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [myBooking, setMyBooking] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/buyerBooking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyBooking(data);
      });
  }, [user?.email]);
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
                  <button className="bg-blue-400 px-4 py-2 text-white font-bold ">
                    Pay
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
