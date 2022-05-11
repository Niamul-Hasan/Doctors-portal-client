import React from 'react';
import img from '../../../assets/images/chair.png';
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 p-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 class="text-5xl font-bold">Make Your New Smile!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary ...">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;