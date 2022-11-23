import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";

const DashBoard = () => {
  return (
    <div className="w-9/12 mx-auto">
      <Header></Header>
      <div className="flex gap-10  ">
        <div className="text-3xl font-bold bg-gray-100 h-screen px-10 py-5">
          <Link to="addservice">Add Products</Link>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
