import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
