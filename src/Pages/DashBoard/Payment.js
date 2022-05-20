import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L15MvFyWKttW5THW2IDhSzQ6S2zTeT7cAj9MhXA26k2SMEFePKkoBNzk6zwyl00Lb31BJINlRmht6NUKqt7xrJZ00tRECIiPR');


const Payment = () => {
    const { appointmentId } = useParams();
    const url = `http://localhost:5000/booking/${appointmentId}`;

    const { data: appointment, isLoading } = useQuery(['booking', appointmentId], () => fetch(url, {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl text-cyan-800 mb-4'>Please Make Payment for: <span
                className='text-3xl text-red-500'
            >{appointmentId}</span></h2>
            <div class="card w-96 bg-base-300 shadow-xl">
                <div class="card-body">
                    <p className='text-teal-600 font-bold'>Hello, {appointment.Patient}</p>
                    <h2 class="card-title">Please Pay For: <span className='text-orange-600'
                    >{appointment.Treatment}</span></h2>
                    <p>Your appointment is on <span
                        className='text-blue-700'
                    >{appointment.Date}</span> at {appointment.Slot}</p>
                    <p>Due Payment is : <span
                        className='text-2xl text-green-800'
                    >${appointment.price}</span></p>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Payment Method : card</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;