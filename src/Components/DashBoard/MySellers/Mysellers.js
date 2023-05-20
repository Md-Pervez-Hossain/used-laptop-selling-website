import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaQuoteRight,
  FaTrash,
  FaUnlock,
} from "react-icons/fa";

const Mysellers = () => {
  const [mySellers, setMySellers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);
  //   const [reviews, setReviews] = useState("");

  const handlePrevious = () => {
    console.log("Clicked previous");
    if (previous > 0) {
      setPrevious(previous - 6);
      setNext(next - 6);
    }
  };
  const handleNext = () => {
    setPrevious(previous + 6);
    setNext(next + 6);
  };

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
      {loading ? (
        <>
          {" "}
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
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {mySellers?.slice(previous, next).map((sellers, i) => (
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
                        className=" font-bold  rounded-md"
                      >
                        <FaTrash className="inline-block text-[14px] mb-1"></FaTrash>{" "}
                        Delete
                      </button>
                    </td>
                    <td>
                      {sellers?.status === "verified" ? (
                        <>
                          {" "}
                          <button className=" font-bold  text-blue-400  rounded-md">
                            {" "}
                            <FaCheckCircle className=" text-blue-400 inline-block text-[14px] mb-1">
                              {" "}
                            </FaCheckCircle>{" "}
                            Varified
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleStatus(sellers._id)}
                            className="font-bold  rounded-md"
                          >
                            <FaUnlock className="  inline-block text-[14px] mb-1"></FaUnlock>{" "}
                            UnVarified
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-end justify-end gap-2">
              <button onClick={() => handlePrevious()}>
                <FaArrowLeft></FaArrowLeft>
              </button>
              <button
                disabled={next > mySellers?.length}
                onClick={() => handleNext()}
              >
                <FaArrowRight></FaArrowRight>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Mysellers;
