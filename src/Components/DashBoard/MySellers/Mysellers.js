import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Mysellers = () => {
  const [mySellers, setMySellers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/mybuyers/Seller`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMySellers(data);
        console.log(data);
      });
  }, [refresh]);

  const handleSellerRemove = (id) => {
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
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/users/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("UserVerified");
        console.log(data);
        setRefresh(!refresh);
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
