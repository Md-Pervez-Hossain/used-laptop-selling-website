import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AuthContext } from "../UseContex/AuthProvider";
import UserRole from "./UserRole";
import logo from "../../assets/logo2.png";
import DashBoadCommonInfo from "./DashBoadCommonInfo";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DashBoard = () => {
  const { user, logout } = useContext(AuthContext);
  const [userRole, setUserRole] = useState([]);
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
        {/* <div>
          <Link to="/">
            <h2 className="mb-5 text-2xl font-bold">
              <img src={logo} alt="" className="w-16 h-16" />
            </h2>
          </Link>
        </div> */}

        <div className="flex flex-col items-center  md:flex-row  gap-10">
          <div className=" basis-3/12 text-xl font-bold h-screen shadow-lg pt-10 pl-5  ">
            <Link to="/">
              {" "}
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

            {userRole?.map((usersRole) => (
              <UserRole key={usersRole._id} usersRole={usersRole}></UserRole>
            ))}
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
