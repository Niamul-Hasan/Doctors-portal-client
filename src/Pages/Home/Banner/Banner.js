import React from 'react';
import img from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/PrimaryButton';
import background from '../../../assets/images/bg.png';
const Banner = () => {
    return (
        <div
            style={{
                background: `url(${background})`,
                backgroundSize: 'cover'
            }}
            className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Make Your New Smile!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;