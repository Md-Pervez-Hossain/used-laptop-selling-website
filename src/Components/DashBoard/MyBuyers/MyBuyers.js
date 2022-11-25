import React, { useEffect, useState } from "react";

const MyBuyers = () => {
  const [myBuyers, setMyBuyers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mybuyers/Buyer`)
      .then((res) => res.json())
      .then((data) => {
        setMyBuyers(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2>My Buyers : {myBuyers.length}</h2>
    </div>
  );
};

export default MyBuyers;
