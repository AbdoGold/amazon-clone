import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';



function Payment() {
    
    const [{basket, user}, dispatch] = useStateValue(); 
    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => { 
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            } 
        }).then(({paymentIntent}) => { 

            db.collection('users').doc(user?.id).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({ 
                type: 'EMPTY_BASKET',
            })

            history.replace('/orders')
        })
    } 

    const handleChange = event => {

        setDisabled(event.empty);
        setError(event.error ? event.error.message: "")
    } 

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Generate the special Stripe secret
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100} `
            })

            setClientSecret(response.data.clientSecret);
        } 
        
        getClientSecret();

    }, [basket])

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout (<Link to="/checkout">{basket?.length} Items</Link>)</h1>
                <div className="payment_section">
                    <div className="payment_title"> 
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>243 Palm Yard</p>
                        <p>Las Vegas, Nevada</p>
                    </div>

                </div>

                <div className="payment_section">
                <div className="payment_title">
                    <h3>Reviewing Your Items</h3>
                    <div className="payment_items">
                        {basket.map(item => ( 
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))} 
                    </div>
                </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                        <div className="payment_details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className="payment_priceContainer">
                                    <CurrencyFormat
                                        renderText = {(value) => (
                                            <>
                                                <h3>Order Total: {value}</h3>
                                            </>    
                                        )}

                                        decimalScale= {2}
                                        value= {getBasketTotal(basket)}
                                        displayType= {"text"}
                                        thousandSeparator= {true} 
                                        prefix= {"$"}
                                    />
                                    <Link to="/">
                                    <button className="payment_btn" disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                                    </button>
                                    </Link>
                                </div>

                                {error && <div>{error}</div>} 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;