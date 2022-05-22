import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import Loading from '../Shared/Loading';

const CheckoutForm = ({ appointment }) => {
    const { _id, price, Email, Patient, Treatment } = appointment;

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [payment, setPayment] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        }).then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || "");
        setPayment('');
        setProcessing(true);

        if (processing) {
            return <Loading></Loading>
        }

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: Patient,
                        email: Email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
        }
        else {
            setCardError('');
            setPayment('Congrates! Your payment is completed.');
            setTransactionId(paymentIntent.id);
            //
            const url = `http://localhost:5000/booking/${_id}`;
            const paymentInfo = {
                payment_ID: _id,
                transactionId: paymentIntent.id,
                appointment: Treatment,
                payment_Amount: price,
                patient: Patient
            }
            fetch(url, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentInfo)
            }).then(res => res.json()).then(data => {
                console.log(data);
                setProcessing(false);
            });

            console.log(paymentIntent);
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit"
                    disabled={!stripe || !clientSecret || payment}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                payment && <div className='text-green-600'>
                    <p>{payment}</p>
                    <p><small>Transaction ID: <span className='text-purple-600 font-bold'> {transactionId}</span></small></p>
                </div>

            }
        </>
    );
};

export default CheckoutForm;