import React, { useEffect, useState } from "react";
import DisplayAdvertisement from "./DisplayAdvertisement";

const Advertisement = () => {
  const [advertise, setAdvertise] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/advertisement")
      .then((res) => res.json())
      .then((data) => {
        setAdvertise(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid md:grid-cols-3 gap-10">
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
