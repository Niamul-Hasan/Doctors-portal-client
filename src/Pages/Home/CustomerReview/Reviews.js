import React from 'react';
import customer1 from '../../../assets/images/people1.png';
import customer2 from '../../../assets/images/people2.png';
import customer3 from '../../../assets/images/people3.png';
import icon from '../../../assets/icons/quote.svg';
import Review from './Review';



const Reviews = () => {
    const customers = [
        {
            _id: 1,
            name: 'Jon Dale',
            location: 'New York',
            comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum officiis atque culpa. Praesentium dicta quas omnis quasi eveniet pariatur!',
            img: customer1
        },
        {
            _id: 2,
            name: 'Bony Dale',
            location: 'New York',
            comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum officiis atque culpa. Praesentium dicta quas omnis quasi eveniet pariatur!',
            img: customer2
        },
        {
            _id: 3,
            name: 'Sony Dale',
            location: 'New York',
            comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum officiis atque culpa. Praesentium dicta quas omnis quasi eveniet pariatur!',
            img: customer3
        },
    ]
    return (
        <section className='my-24'>
            <div className='flex justify-between items-center mb-12'>
                <div className='pl-12'>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h1 className='text-accent text-3xl'>What Our Patients Say</h1>
                </div>
                <div>
                    <img className='w-28 lg:w-48' src={icon} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pl-12'>
                {
                    customers.map(customer => <Review
                        key={customer._id}
                        customer={customer}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;