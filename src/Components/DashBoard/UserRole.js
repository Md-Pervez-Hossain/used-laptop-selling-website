import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserRole = ({ usersRole }) => {
  const { role } = usersRole;
  console.log(role);
  return (
    <div>
      {role === "Seller" ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 font-thin"
            }
            to="addservice"
          >
            Add Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 font-thin"
            }
            to="myservice"
          >
            My Products
          </NavLink>
        </>
      ) : (
        <></>
      )}
      {role === "Buyer" && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 font-thin"
            }
            to="myorders"
          >
            My Orders
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 font-thin"
            }
            to="mywishlist"
          >
            My WishList
          </NavLink>
        </>
      )}
      {role === "Admin" && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 font-thin"
            }
            to="mysellers"
          >
            <p>My Sellers</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 font-thin"
            }
            to="mybuyers"
          >
            <p>My Buyers</p>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default UserRole;
