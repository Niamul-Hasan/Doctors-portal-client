import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import Footer from '../Shared/Footer/Footer';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p>You Have Selected : {format(date, "PP")}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Appointment;