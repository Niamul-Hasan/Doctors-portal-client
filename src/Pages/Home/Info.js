import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-6 text-white'>
            <InfoCart bgClass='bg-gradient-to-r from-secondary to-primary' cartTitle='Opening Hours' img={clock}></InfoCart>
            <InfoCart bgClass='bg-[#3A4256]' cartTitle='Our Locations' img={marker}></InfoCart>
            <InfoCart bgClass='bg-gradient-to-r from-secondary to-primary' cartTitle='Contact Us' img={phone}></InfoCart>
        </div>
    );
};

export default Info;