import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [successId, setSuccessId] = useState("");
  const {
    price,
    number,
    image,
    email,
    location,
    bookingId,
    productname,
    _id,
    sellerEmail,
    sellerName,
  } = booking;
  console.log(booking);

  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError("");
    }
    setProcessing(true);
    setSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        bookingId,
        transTionId: paymentIntent.id,
        number,
        image,
        email,
        location,
        productname,
        sellerEmail,
        sellerName,
      };
      fetch(
        "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/payments",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess("Congratulation ! your payment SuccessFull");
            setSuccessId(paymentIntent.id);
            console.log(data);
          }
        });
    }
    setProcessing(false);
    console.log(paymentIntent);
    console.log(clientSecret);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-blue-400 px-4 py-2 text-white font-bold rounded-md my-3"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>

      <p className="text-2xl text-red-600 font-bold">{cardError}</p>
      <div>
        {success && (
          <div>
            <p className="text-blue-400 font-bold">{success}</p>
            <p>
              Tour Transtion id: <strong>{successId}</strong>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
