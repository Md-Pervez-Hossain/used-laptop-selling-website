import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Mysellers = () => {
  const [mySellers, setMySellers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mybuyers/Seller`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMySellers(data);
        console.log(data);
      });
  }, []);

  const handleSellerRemove = (id) => {
    const agree = window.confirm("are you sure you want to delete");
    if (agree) {
      fetch(`http://localhost:5000/deleteBuyers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Buyers Deleted");
          const remaining = mySellers.filter((buyers) => buyers._id !== id);
          setMySellers(remaining);
          console.log(data);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  const handleStatus = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("UserVerified");
        setMySellers(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="text-4xl font-bold my-5">My Sellers</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mySellers?.map((sellers, i) => (
              <tr key={sellers._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    src={sellers.image}
                    alt=""
                    className="h-16 rounded-full"
                  />
                </td>
                <td>{sellers.name}</td>
                <td>{sellers.email}</td>
                <td>
                  <button
                    onClick={() => handleSellerRemove(sellers._id)}
                    className="bg-blue-400 font-bold text-xl px-4 py-2 text-white rounded-md"
                  >
                    Remove
                  </button>
                </td>
                <td>
                  {sellers?.status === "verified" ? (
                    <>
                      {" "}
                      <button className="bg-blue-400 font-bold text-xl px-4 py-2 text-white rounded-md">
                        Varified
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleStatus(sellers._id)}
                        className="bg-blue-400 font-bold text-xl px-4 py-2 text-white rounded-md"
                      >
                        UnVarified
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mysellers;
