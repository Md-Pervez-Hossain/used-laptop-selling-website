import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51M8p5YJkqnDcRrsTgdGkXQ5J4q8JR1TxSsJvdk4TkfrrqwBDi0yU1t29a5tYWaOV2vI0FSJWiJ5aRyMVQYEfxTFd00MSaTjsmk"
);
console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  const { productname, price, _id } = booking;
  console.log(booking);
  return (
    <div>
      <h2 className="text-3xl font-bold">Payment For {productname}</h2>
      <p className="font-normal">
        Please Pay <strong>$ {price}</strong> For Id : {_id}
      </p>
      <div className="w-96 my-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
