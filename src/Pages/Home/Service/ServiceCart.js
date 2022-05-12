import React from 'react';
import pic1 from '../../../assets/images/cavity.png';
import pic2 from '../../../assets/images/fluoride.png';
import pic3 from '../../../assets/images/whitening.png';
import ServiceDetails from './ServiceDetails';
import ServiceHero from './ServiceHero';

const ServiceCart = () => {
    const services = [

        { _id: 1, img: pic1, title: 'Cavity Treatment', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aliquam" },
        { _id: 2, img: pic2, title: 'Flourish Treatment', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aliquam" },
        { _id: 3, img: pic3, title: 'Teeth Whitening', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aliquam" },
    ]
    return (
        <>
            <h3 class='text-center text-primary text-xl text-bold'>Our Services</h3>
            <h1 class='text-center text-accent text-2xl'>Service We Provide</h1>

            <div class='grid grid-cols-1 lg:grid-cols-3 gap-4 pb-6'>

                {
                    services.map(service => <ServiceDetails
                        key={service._id}
                        service={service}
                    ></ServiceDetails>)
                }
            </div>
            <ServiceHero></ServiceHero>
        </>
    );
};

export default ServiceCart;