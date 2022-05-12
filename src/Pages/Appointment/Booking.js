import React from 'react';

const Booking = ({ booking, setTreatment }) => {
    const { name, slots } = booking;
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl text-center mt-4">
            <div class="card-body">
                <h2 class="card-title justify-center text-secondary">{name}</h2>
                <p>{slots.length ? `Available Space ${slots.length}` : <span className='text-red-500'>Try Another Date</span>}</p>
                <p>{slots.length ? slots[0] : <span className='font-bold text-2xl text-red-700 uppercase'>All Booked</span>}</p>
                <div class="card-actions justify-center">

                    <label for="booking-modal"
                        onClick={() => setTreatment(booking)}
                        disabled={slots.length === 0} class="btn btn-secondary text-white"
                    >Get Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Booking;