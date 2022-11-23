import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const HandleLogOut = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="bg-blue-400 text-white py-5">
      <div className="w-9/12 mx-auto font-bold text-2xl ">
        <div className="flex justify-between">
          <div>
            <Link to="/">Laptop-Shop</Link>
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
