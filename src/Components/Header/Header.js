import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";
import logo from "../../assets/logo.png";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const HandleLogOut = () => {
    logout()
      .then(() => {
        localStorage.removeItem("accessToken");
        navigate("/");
      })
      .catch(() => {});
  };
  return (
    <div className="bg-blue-400  py-5">
      <div className="w-9/12 mx-auto font-semibold text-2xl ">
        <div className="flex justify-between items-center ">
          <div>
            <Link to="/">
              <img src={logo} alt="" className="h-14" />
            </Link>
          </div>
          <div className="flex md:gap-5 items-center menu menu-vertical lg:menu-horizontal">
            <Link to="/" className="text-white font-bold">
              Home
            </Link>
            <Link to="/blog" className="text-white font-bold">
              Blog
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  {user?.uid ? (
                    <>
                      <Link to="/dashboard">DashBoard</Link>
                      <Link onClick={HandleLogOut}>Logout</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">Login</Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
