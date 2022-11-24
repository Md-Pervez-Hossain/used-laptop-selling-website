import React from "react";
import { Link } from "react-router-dom";

const UserRole = ({ usersRole }) => {
  const { role } = usersRole;
  console.log(role);
  return (
    <div>
      {role === "Seller" && (
        <>
          <Link to="addservice">Add Products</Link>
          <br />
          <Link to="myservice">My Products</Link>
        </>
      )}
      {role === "Buyer" && (
        <>
          <Link to="myorders">My Orders</Link>
        </>
      )}
    </div>
  );
};

export default UserRole;
