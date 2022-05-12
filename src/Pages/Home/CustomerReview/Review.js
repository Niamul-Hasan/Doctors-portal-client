import React from 'react';

const Review = ({ customer }) => {
    const { name, comment, img, location } = customer;

    return (
        <section className="card lg-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <p className='text-lg leading-6'>{comment}</p>
            </div>

            <div className='flex items-center ml-5 mb-5'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-6">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className='text-accent text-xl text-bold'>{name}</h3>
                    <p>{location}</p>
                </div>
            </div>

        </section>
    );
};

export default Review;