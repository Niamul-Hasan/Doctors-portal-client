import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Booking from './Booking';
import BookingModal from './BookingModal';


const AvailableAppointment = ({ date }) => {

    const [bookings, setBookings] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h2 className='text-secondary text-center text-xl'>Available Appointment in {format(date, "PP")}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {bookings.map(booking => <Booking
                    key={booking._id}
                    booking={booking}
                    setTreatment={setTreatment}
                ></Booking>)}
            </div>
            {treatment && <BookingModal
                key={treatment._id}
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;