import {useStripe, useElements, CardElement, LinkAuthenticationElement} from '@stripe/react-stripe-js';
import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  let params = useParams();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let clientSecret = props.secret


  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent.status)
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break; 
      }
    });
  }, [stripe]);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    



   



    
    const data = {"secret": props.id, "order_id": params.order_id}

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    let confirmParams = {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000",
          payment_method: {card: elements.getElement(CardElement)}
         }
    
         const {error} = await stripe.confirmCardPayment(
          clientSecret,
          confirmParams
        ).then(res=>{
          console.log("we are making payment")
          console.log(res)}).then(()=>{
      fetch("http://44.212.67.79/checkpayment",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
        })
     });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  }
  
  return (
    <div className='payment'>
    <Form onSubmit={handleSubmit}>
      <CardElement id='card-element'/>
      
      <Button disabled={isLoading || !stripe || !elements} id="submit" onClick={(e)=>handleSubmit(e)}>
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </Button>

    </Form>
    </div>
  )
};

export default CheckoutForm;