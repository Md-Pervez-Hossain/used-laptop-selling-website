import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import { AuthContext } from "../UseContex/AuthProvider";
import UserRole from "./UserRole";
import logo from "../../assets/logo2.png";
import {
  FaCarAlt,
  FaCartPlus,
  FaHeart,
  FaRegListAlt,
  FaRegPlusSquare,
  FaUserAlt,
  FaWeightHanging,
} from "react-icons/fa";

const DashBoard = () => {
  const { user, logout } = useContext(AuthContext);
  const [userRole, setUserRole] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserRole(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="md:w-9/12 mx-auto ">
            <div className="grid md:grid-cols-3 items-center  md:flex-row  gap-10">
              <div className=" col-span-1  text-xl font-bold h-screen shadow-lg pt-10 pl-5  ">
                <Link to="/">
                  <img src={logo} alt="" className="mb-5 w-24 h-24" />
                </Link>

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
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
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
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
                        }
                        to="myservice"
                      >
                        <p className="mb-2">
                          {" "}
                          <FaWeightHanging className="inline-block mb-2 mr-2"></FaWeightHanging>{" "}
                          My Products
                        </p>
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
                        }
                        to="sellerBookedProduct"
                      >
                        <p className="mb-2">
                          {" "}
                          <FaWeightHanging className="inline-block mb-2 mr-2"></FaWeightHanging>{" "}
                          Booked Products
                        </p>
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
                        }
                        to="sellerOrderProduct"
                      >
                        <p className="mb-2">
                          {" "}
                          <FaWeightHanging className="inline-block mb-2 mr-2"></FaWeightHanging>{" "}
                          Oders
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
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
                        }
                        to="myorders"
                      >
                        <p className="mb-2">
                          {" "}
                          <FaCartPlus className="inline-block mb-2 mr-3"></FaCartPlus>
                          My Booking
                        </p>
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
                        }
                        to="buyerOrderProduct"
                      >
                        <p className="mb-2">
                          {" "}
                          <FaCartPlus className="inline-block mb-2 mr-3"></FaCartPlus>
                          My Orders
                        </p>
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
                        }
                        to="mywishlist"
                      >
                        <p className="mb-2">
                          {" "}
                          <FaHeart className="inline-block mb-2 mr-2"></FaHeart>{" "}
                          My WishList
                        </p>
                      </NavLink>
                    </>
                  )}
                  {userRole?.role === "Admin" && (
                    <>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
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
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
                        }
                        to="mybuyers"
                      >
                        <p className="mb-2">
                          {" "}
                          <FaUserAlt className="inline-block mb-2 mr-2"></FaUserAlt>{" "}
                          My Buyers
                        </p>
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-400 font-bold"
                            : "text-black-500 "
                        }
                        to="laptopBlog"
                      >
                        <p className="mb-2">
                          {" "}
                          <FaUserAlt className="inline-block mb-2 mr-2"></FaUserAlt>{" "}
                          Blog
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
              <div className="col-span-2">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoard;
