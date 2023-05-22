import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import { AuthContext } from "../UseContex/AuthProvider";
import UserRole from "./UserRole";
import logo from "../../assets/logo2.png";
import {
  FaCarAlt,
  FaHeart,
  FaRegListAlt,
  FaRegPlusSquare,
  FaUserAlt,
  FaWeightHanging,
} from "react-icons/fa";

const DashBoard = () => {
  const { user, logout } = useContext(AuthContext);
  const [userRole, setUserRole] = useState({});
  const navigate = useNavigate();

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

  const HandleLogOut = () => {
    logout()
      .then(() => {
        localStorage.removeItem("accessToken");
        navigate("/");
      })
      .catch(() => {});
  };
  console.log(userRole);
  return (
    <div>
      <div className="md:w-9/12 mx-auto ">
        <div className="flex flex-col items-center  md:flex-row  gap-10">
          <div className=" basis-3/12 text-xl font-bold h-screen shadow-lg pt-10 pl-5  ">
            <Link to="/">
              <img src={logo} alt="" className="mb-5 w-24 h-24" />
            </Link>

            <div className="flex gap-4 items-center mb-5">
              <div
                style={{
                  backgroundImage: `url(${user?.photoURL})`,
                }}
                className=" border-2 border-blue-400  bg-center bg-cover bg-no-repeat h-16 w-16 rounded-full"
              ></div>
              <h2 className="text-xl font-bold">{user?.displayName}</h2>
            </div>

            <div>
              <NavLink to="/dashboard">
                <p className="mb-2">
                  <FaRegListAlt className="inline-block mb-2 mr-2"></FaRegListAlt>{" "}
                  Dashboard
                </p>
              </NavLink>
            </div>

            <div>
              {userRole?.role === "Seller" ? (
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
              {userRole?.role === "Buyer" && (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-bold" : "text-black-500 "
                    }
                    to="myorders"
                  >
                    <p>
                      {" "}
                      <FaCarAlt className="inline-block mb-2 mr-2"></FaCarAlt>My
                      Orders
                    </p>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-bold" : "text-black-500 "
                    }
                    to="mywishlist"
                  >
                    <p>
                      {" "}
                      <FaHeart className="inline-block mb-2 mr-2"></FaHeart> My
                      WishList
                    </p>
                  </NavLink>
                </>
              )}
              {userRole?.role === "Admin" && (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-bold" : "text-black-500 "
                    }
                    to="mysellers"
                  >
                    <p className="mb-2">
                      {" "}
                      <FaUserAlt className="inline-block mb-2 mr-2"></FaUserAlt>{" "}
                      My Sellers
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
                      <FaUserAlt className="inline-block mb-2 mr-2"></FaUserAlt>{" "}
                      My Buyers
                    </p>
                  </NavLink>
                </>
              )}
            </div>
            <button
              onClick={HandleLogOut}
              className="hover:bg-blue-400 bg-black duration-500 px-4 py-2 mt-3 rounded-md text-[16px] text-white"
            >
              Logout
            </button>
          </div>
          <div className="basis-9/12 my-16">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
