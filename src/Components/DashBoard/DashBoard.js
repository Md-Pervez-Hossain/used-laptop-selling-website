import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { AuthContext } from "../UseContex/AuthProvider";
import UserRole from "./UserRole";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserRole(data);
        console.log(data);
      });
  }, [user?.email]);
  console.log(userRole);
  return (
    <div>
      <Header></Header>
      <div className="w-9/12 mx-auto">
        <div className="flex gap-10  ">
          <div className="text-3xl font-bold bg-gray-100 h-screen px-10 py-5">
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
