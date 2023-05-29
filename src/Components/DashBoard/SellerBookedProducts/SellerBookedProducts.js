import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UseContex/AuthProvider";

const SellerBookedProducts = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [sellerBookingProduct, setSellerBookingProduct] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/buyer-booking`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSellerBookingProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  console.log(sellerBookingProduct);
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
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Amount</th>
                    <th>Product Id</th>
                    <th>Location</th>
                    <th>Phone Number</th>
                    <th>Buyer Name</th>
                  </tr>
                </thead>
                <tbody>
                  {sellerBookingProduct?.map((bookingProduct, idx) => {
                    return (
                      <tr>
                        {bookingProduct?.sellerEmail === user?.email ? (
                          <>
                            {" "}
                            <th>{idx + 1}</th>
                            <td>{bookingProduct?.productname}</td>
                            <td>
                              <div
                                style={{
                                  backgroundImage: `url(${bookingProduct?.image})`,
                                }}
                                className="bg-cover bg-center bg-no-repeat h-[80px] w-[80px] rounded-full"
                              ></div>
                            </td>
                            <td>{bookingProduct?.price}</td>
                            <td>{bookingProduct?.bookingId}</td>
                            <td>{bookingProduct?.location}</td>
                            <td>{bookingProduct?.number}</td>
                            <td>{bookingProduct?.name}</td>
                          </>
                        ) : (
                          <></>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SellerBookedProducts;
