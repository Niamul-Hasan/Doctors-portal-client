import React from 'react';
import backimg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const Contact = () => {
    return (

        <section style={{ background: `url(${backimg})` }}>
            <div className='text-center pt-6'>
                <h3 className='text-xl font-bold text-secondary'>Contact US</h3>
                <h1 className='text-3xl text-white'>Stay Connect With US</h1>
            </div>

            <div className='flex justify-center'>
                <div className="form-control w-full max-w-xs my-12">
                    <input type="email" placeholder="Type your email here" className="input input-bordered w-full max-w-xs mb-4" />
                    <input type="text" placeholder="Type your Subject here" className="input input-bordered w-full max-w-xs mb-4" />
                    <textarea className="textarea textarea-bordered" placeholder="Place your openion"></textarea>
                    <div className='mt-4 text-center'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;