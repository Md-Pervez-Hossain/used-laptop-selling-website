import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../UseContex/AuthProvider";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const [myBuyers, setMyBuyers] = useState([]);
  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/mybuyers/Buyer`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyBuyers(data);
        console.log(data);
      });
  }, []);

  const handleBuyersRemove = (id) => {
    console.log(id);
    const agree = window.confirm("are you sure you want to delete");
    if (agree) {
      fetch(
        `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/deleteBuyers/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success("Buyers Deleted");
          const remaining = myBuyers.filter((buyers) => buyers._id !== id);
          setMyBuyers(remaining);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  return (
    <div>
      <h2 className="text-4xl font-bold my-5">My Buyers </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myBuyers.map((buyers, i) => (
            <tr key={buyers._id}>
              <th>{i + 1}</th>
              <td>
                <img src={buyers.image} alt="" className="h-16 rounded-full" />
              </td>
              <td>{buyers.name}</td>
              <td>{buyers.email}</td>
              <td>
                <button
                  onClick={() => handleBuyersRemove(buyers._id)}
                  className="bg-blue-400 font-bold text-xl px-4 py-2 text-white rounded-md"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBuyers;
