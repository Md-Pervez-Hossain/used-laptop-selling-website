import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UseContex/AuthProvider";
import DisplayAdvertisement from "./DisplayAdvertisement";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Advertisement = () => {
  const { user } = useContext(AuthContext);
  const [advertise, setAdvertise] = useState([]);
  const [loading, setLoading] = useState(false);

  // const { data: queryAdvertisement = [] } = useQuery({
  //   queryKey: ["advertisement"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/advertisement"
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(4);
  //   const [reviews, setReviews] = useState("");

  const handlePrevious = () => {
    console.log("Clicked previous");
    if (previous > 0) {
      setPrevious(previous - 4);
      setNext(next - 4);
    }
  };
  const handleNext = () => {
    setPrevious(previous + 4);
    setNext(next + 4);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/advertisement`
    )
      .then((res) => res.json())
      .then((data) => {
        setAdvertise(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <>
          {" "}
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
          </div>
        </>
      ) : (
        <>
          {" "}
          {advertise?.length > 0 ? (
            <>
              <div className="md:w-9/12 mx-auto mt-16 ">
                <div
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <h2 className="text-3xl mb-10 font-bold">Sponsared</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-10">
                  {advertise?.slice(previous, next)?.map((advertisement) => (
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
        </>
      )}
      <div className="flex items-end justify-end gap-2 w-9/12 mx-auto mt-5">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={next > advertise?.length || next === advertise?.length}
          onClick={() => handleNext()}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
