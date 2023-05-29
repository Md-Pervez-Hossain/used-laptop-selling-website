import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const DashBoadCommonInfo = () => {
  const { user } = useContext(AuthContext);
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buyers, setBuyers] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/users`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setusers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        setBuyers(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

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
        setSellers(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="flex gap-4 items-center mb-5">
          <div
            style={{
              backgroundImage: `url(${user?.photoURL})`,
            }}
            className=" border-2 border-blue-400  bg-center bg-cover bg-no-repeat h-44 w-44 rounded-full"
          ></div>
        </div>
        <p className="text-3xl font-bold my-5">
          WelCome To Dashboard , {user?.displayName}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro
          nobis odit minus unde, sint maxime reprehenderit voluptas sed.
          Praesentium.
        </p>
        <div className="grid lg:grid-cols-3 gap-10 my-10">
          <div className="bg-white shadow-lg p-5">
            <h2 className="font-bold">Total Users</h2>
            <p>{users?.length}</p>
          </div>
          <div className="bg-white shadow-lg p-5">
            <h2 className="font-bold">Total Buyers</h2>
            <p>{buyers?.length}</p>
          </div>
          <div className="bg-white shadow-lg p-5">
            <h2 className="font-bold">Total Sellers</h2>
            <p>{sellers?.length}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-white shadow-lg p-5">
            <h2 className="font-bold">Total Sell</h2>
            <p>{0}</p>
          </div>
          <div className="bg-white shadow-lg p-5">
            <h2 className="font-bold">Total Revenue</h2>
            <p>{0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoadCommonInfo;
