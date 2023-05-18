import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AuthContext } from "../UseContex/AuthProvider";
import UserRole from "./UserRole";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState([]);
  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserRole(data);
        console.log(data);
      });
  }, [user?.email]);
  console.log(userRole);
  return (
    <div>
      <div className="md:w-9/12 mx-auto my-16">
        <Link to="/">
          <h2 className="mb-5 text-2xl font-bold">Logo</h2>
        </Link>
        <div className="flex flex-col md:flex-row gap-10  ">
          <div className="text-xl font-bold">
            {userRole?.map((usersRole) => (
              <UserRole key={usersRole._id} usersRole={usersRole}></UserRole>
            ))}
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
