import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../UseContex/AuthProvider";
import { FaArrowLeft, FaArrowRight, FaTrash } from "react-icons/fa";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const [myBuyers, setMyBuyers] = useState([]);
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
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myBuyers?.slice(previous, next).map((buyers, i) => (
                  <tr key={buyers._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={buyers.image}
                        alt=""
                        className="h-16 rounded-full"
                      />
                    </td>
                    <td>{buyers.name}</td>
                    <td>{buyers.email}</td>
                    <td>
                      <button
                        onClick={() => handleBuyersRemove(buyers._id)}
                        className=" font-bold  rounded-md"
                      >
                        <FaTrash className="inline-block text-[14px] mb-1"></FaTrash>{" "}
                        Delete
                      </button>
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
                disabled={next > myBuyers?.length || next === myBuyers?.length}
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

export default MyBuyers;
