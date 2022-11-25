import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UseContex/AuthProvider";
import DisplayWishList from "./DisplayWishList";

const MyWishList = () => {
  const { user } = useContext(AuthContext);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishList(data);
        console.log(data);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="grid md:grid-cols-4 my-16">
        {wishList.map((wishListProduct) => (
          <DisplayWishList
            key={wishListProduct._id}
            wishListProduct={wishListProduct}
          ></DisplayWishList>
        ))}
      </div>
    </div>
  );
};

export default MyWishList;
