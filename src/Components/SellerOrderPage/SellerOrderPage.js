import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../UseContex/AuthProvider";

const SellerOrderPage = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/payment/successfull`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <h2>{orders?.length}</h2>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ProductName</th>
              <th>Image</th>
              <th>Amount</th>
              <th>Product Id</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, idx) => {
              return (
                <>
                  {order?.sellerEmail === user?.email ? (
                    <>
                      {" "}
                      <tr key={order?.id}>
                        <th></th>
                        <td>{order?.productname}</td>
                        <td>
                          <div
                            style={{
                              backgroundImage: `url(${order?.image})`,
                            }}
                            className="bg-cover bg-center bg-no-repeat h-[80px] w-[80px] rounded-full"
                          ></div>
                        </td>
                        <td>{order?.price}</td>
                        <td>{order?.bookingId}</td>
                        <td>{order?.transTionId}</td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerOrderPage;
