import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {

                    setAppointments(data)
                });
        }
    }, [user, navigate])
    return (
        <div>
            <h2 className='text-xl text-purple-600'>My Appointments: <span className='text-3xl text-orange-500'>{appointments.length}</span></h2>
            <div class="overflow-x-auto mt-3">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.Patient}</td>
                                <td>{a.Date}</td>
                                <td>{a.Slot}</td>
                                <td>{a.Treatment}</td>
                                {<td>{(a.price && !a.paid) && <Link to={`/dash/payment/${a._id}`}><button class="btn btn-xs btn-success">Pay</button></Link>}</td>}
                                {<td>{(a.price && a.paid) && <span className='text-success text-xl font-bold'>Paid</span>}</td>}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;