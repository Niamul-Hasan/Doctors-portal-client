import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const [user] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const date = event.target.date.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(name, email, phone, slot, date);
        const bookings = {
            Id: treatment._id,
            Treatment: treatment.name,
            Patient: name,
            Email: email,
            Phone: phone,
            Slot: slot,
            Date: date
        };

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookings)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.success) {
                toast(`Your Appointment is Confirmed on ${date} at ${slot}`);
            }
            else {
                toast.error(`Already have an appointment on ${data.data?.Date} at ${data.data?.Slot}`);
            }
            setTreatment(null);

        })

    }
    return (
        <section>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary">Booking for: {name} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name='date' value={format(date, "PP")} disabled readOnly class="input input-bordered w-full max-w-xs" />

                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" value={user?.displayName} disabled readOnly class="input input-bordered w-full max-w-xs" required />
                        <input type="text" name="email" value={user?.email} disabled readOnly class="input input-bordered w-full max-w-xs" required />
                        <input type="text" name="phone" placeholder="Type Phone Number" class="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit"
                            class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingModal;