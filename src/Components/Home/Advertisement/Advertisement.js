import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UseContex/AuthProvider";
import DisplayAdvertisement from "./DisplayAdvertisement";

const Advertisement = () => {
  const { user } = useContext(AuthContext);
  const [advertise, setAdvertise] = useState([]);

  const { data: queryAdvertisement = [] } = useQuery({
    queryKey: ["advertisement"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/advertisement"
      );
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch(`https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/advertisement`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAdvertise(data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div>
      {queryAdvertisement?.length > 0 ? (
        <>
          <div className="md:w-9/12 mx-auto my-16 p-4">
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h2 className="text-3xl mb-5 font-bold">Sponsared</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-10">
              {queryAdvertisement?.map((advertisement) => (
                <DisplayAdvertisement
                  key={advertisement._id}
                  advertisement={advertisement}
                ></DisplayAdvertisement>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Advertisement;
