import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../UseContex/AuthProvider";

const BuyersOrderPage = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/payments/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>product Name</th>
              <th>image</th>
              <th>Amount</th>
              <th>TransTion Id</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, idx) => {
              return (
                <tr>
                  <th>{idx + 1}</th>
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
                  <td>{order?.transTionId}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyersOrderPage;
