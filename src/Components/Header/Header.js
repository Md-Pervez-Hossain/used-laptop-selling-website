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
        navigate("/");
      })
      .catch(() => {});
  };
  return (
    <div className="bg-blue-400 text-white py-5">
      <div className="w-9/12 mx-auto font-bold text-2xl ">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="" className="h-14" />
            </Link>
          </div>
          <div className="flex gap-5">
            <Link to="/">Home</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
