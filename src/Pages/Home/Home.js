import React from 'react';
import Banner from './Banner/Banner';
import Reviews from './CustomerReview/Reviews';
import HomeAppoinment from './HomeAppoinment';
import Info from './Info';
import ServiceCart from './Service/ServiceCart';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <ServiceCart></ServiceCart>
            <HomeAppoinment></HomeAppoinment>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;