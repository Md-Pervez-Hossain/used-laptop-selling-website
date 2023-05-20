import React from "react";
import {
  FaAd,
  FaRegPlusSquare,
  FaUserAlt,
  FaWeightHanging,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import DashBoadCommonInfo from "./DashBoadCommonInfo";

const UserRole = ({ usersRole }) => {
  const { role } = usersRole;
  console.log(role);
  return (
    <div>
      {role === "Seller" ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 "
            }
            to="addservice"
          >
            <p className="mb-2">
              {" "}
              <FaRegPlusSquare className="inline-block mb-2 mr-2"></FaRegPlusSquare>{" "}
              Add Products
            </p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 "
            }
            to="myservice"
          >
            <p className="mb-2">
              {" "}
              <FaWeightHanging className="inline-block mb-2 mr-2"></FaWeightHanging>{" "}
              My Products
            </p>
          </NavLink>
        </>
      ) : (
        <></>
      )}
      {role === "Buyer" && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 "
            }
            to="myorders"
          >
            My Orders
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 "
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
              isActive ? "text-blue-400 font-bold" : "text-black-500 "
            }
            to="mysellers"
          >
            <p className="mb-2">
              {" "}
              <FaUserAlt className="inline-block mb-2 mr-2"></FaUserAlt> My
              Sellers
            </p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-black-500 "
            }
            to="mybuyers"
          >
            <p className="mb-2">
              {" "}
              <FaUserAlt className="inline-block mb-2 mr-2"></FaUserAlt> My
              Buyers
            </p>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default UserRole;
