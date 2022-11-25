import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UseContex/AuthProvider";
import DisplayAdvertisement from "./DisplayAdvertisement";

const Advertisement = () => {
  const { user } = useContext(AuthContext);
  const [advertise, setAdvertise] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/advertisement`)
      .then((res) => res.json())
      .then((data) => {
        setAdvertise(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="md:w-9/12 mx-auto my-16 p-4">
      <div className="grid md:grid-cols-4 gap-10">
        {advertise.map((advertisement) => (
          <DisplayAdvertisement
            key={advertisement._id}
            advertisement={advertisement}
          ></DisplayAdvertisement>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
