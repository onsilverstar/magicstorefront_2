import {Elements} from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_okd9EP3dOt2XlLZ7bpJmOzvS00jOOO8z3h'); 

export default function StripePay(props) {
const [clientSecret, setClientSecret] = useState("");
const [paymentId, setpaymentId] = useState("");
useEffect(()=> {
  let data = {total: props.cost}
  console.log(data)
  fetch("http://44.212.67.79/createpayment",
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json()).then((data) => {
    setClientSecret(data["CLIENT_SECRET"])
    setpaymentId(data["id"])
    console.log(clientSecret)});
}, [])

// const secret = async ()=>
// {
// let response = await fetch("http://127.0.0.1:8000/createpayment",
// {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(data)
// })
// let data_= await response.json()
// setclient(data_)
// console.log(client)
// return data_
// }
// let client_string = JSON.stringify(client)
const appearance = {
  theme: 'stripe',
};
  const options = {
    // passing the client secret obtained from the server
    clientSecret,
    appearance,
  };

  return (
    <div className='payment'>
      { clientSecret &&
      <Elements options={options} stripe={stripePromise}>
      <CheckoutForm secret = {clientSecret} id = {paymentId}/>
      </Elements>
      }
    </div>
    
  );
};