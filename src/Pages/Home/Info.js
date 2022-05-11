import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';

const Info = () => {
    return (
        <div class='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCart img={clock}></InfoCart>
            <InfoCart img={clock}></InfoCart>
            <InfoCart img={clock}></InfoCart>
        </div>
    );
};

export default Info;