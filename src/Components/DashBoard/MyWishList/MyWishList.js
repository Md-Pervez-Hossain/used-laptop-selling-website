import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UseContex/AuthProvider";
import DisplayWishList from "./DisplayWishList";
import { Link } from "react-router-dom";

const MyWishList = () => {
  const { user } = useContext(AuthContext);
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/wishlist/${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setWishList(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [user?.email]);
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
                  <th></th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {wishList?.map((wishlist, idx) => {
                  return (
                    <tr>
                      <th>{idx + 1}</th>
                      <td>
                        {/* <Link to={`/addProduct/${wishlist?._id}`}>
                         
                        </Link> */}
                        {wishlist?.name}
                      </td>
                      <td>
                        <div
                          style={{
                            backgroundImage: `url(${wishlist?.image})`,
                          }}
                          className="bg-cover bg-center bg-no-repeat h-[80px] w-[80px] rounded-full"
                        ></div>
                      </td>
                      <td>{wishlist?.resellPrice} BDT</td>
                      <td>
                        <Link to={`/dashboard/payment/${wishlist?._id}`}>
                          <button className="bg-blue-400 px-4 py-2 rounded-md font-bold text-white mt-2">
                            Pay
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyWishList;
