import React from 'react';
import doctor from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const HomeAppoinment = () => {
    return (
        <section
            style={{ background: `url(${background})` }}
            className='flex justify-center items-center px-6 py-8 mt-24'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-primary text-xl pb-4'>Appoinment</h3>
                <h1 className='text-4xl text-white pb-4'>Get Your Appoinment Here</h1>
                <p className='text-white pb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis rem optio accusantium voluptatem obcaecati sunt cum culpa voluptatibus odit dignissimos, magnam fugit unde aliquid eos quod ipsa numquam quisquam?</p>
                <PrimaryButton>Get Appoinment</PrimaryButton>
            </div>

        </section>
    );
};

export default HomeAppoinment;