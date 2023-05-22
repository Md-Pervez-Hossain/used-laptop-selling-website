import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const DashBoadCommonInfo = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
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
            <p>{0}</p>
          </div>
          <div className="bg-white shadow-lg p-5">
            <h2 className="font-bold">Total Buyers</h2>
            <p>{0}</p>
          </div>
          <div className="bg-white shadow-lg p-5">
            <h2 className="font-bold">Total Sellers</h2>
            <p>{0}</p>
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
