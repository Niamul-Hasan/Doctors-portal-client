import React from 'react';
import img from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const ServiceHero = () => {
    return (
        <div className="hero min-h-screen bg-base-100 lg:px-32 mb-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className='lg:pl-12'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care On Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;