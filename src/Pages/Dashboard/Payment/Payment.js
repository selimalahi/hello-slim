import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";
import Loading from "./../../../Shared/Loading/Loading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { productName, price, email, img } = booking;
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl">Payment for {productName}</h2>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your booking on {email}{" "}
      </p>
      <figure>
        <img className=" h-72 object-cover " src={img} alt="category" />
      </figure>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
