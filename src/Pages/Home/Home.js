import React from 'react';
import Banner from './Banner/Banner';
import Contact from './ContactUS/Contact';
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
            <Contact></Contact>
        </div>
    );
};

export default Home;