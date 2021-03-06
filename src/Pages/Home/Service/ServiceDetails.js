import React from 'react';

const ServiceDetails = ({ service }) => {
    const { img, title, description } = service;
    return (
        <>
            <div className="card lg-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </>
    );
};

export default ServiceDetails;