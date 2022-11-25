import React, { useEffect, useState } from "react";

const Mysellers = () => {
  const [mySellers, setMySellers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mybuyers/Seller`)
      .then((res) => res.json())
      .then((data) => {
        setMySellers(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mySellers.map((sellers, i) => (
              <tr key={sellers._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    src={sellers.image}
                    alt=""
                    className="h-16 rounded-full"
                  />
                </td>
                <td>{sellers.name}</td>
                <td>{sellers.email}</td>
                <td>
                  <button className="bg-blue-400 font-bold text-xl px-4 py-2 text-white rounded-md">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mysellers;
