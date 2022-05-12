import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';
import ServiceCart from './Service/ServiceCart';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <ServiceCart></ServiceCart>
        </div>
    );
};

export default Home;