import React from 'react';

const InfoCart = ({ img, cartTitle, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure class='pl-6'>
                <img src={img} alt="Album" />

            </figure>
            <div class="card-body">
                <h2 class="card-title">{cartTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCart;