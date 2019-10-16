import React from 'react';

const Travel = ({ destination, country, image, distance }) => (
    <div>
        <h1>{destination}</h1>
        <h2>{country}</h2>
        <img src={image} />
        <p>Distance: {distance}</p>
    </div>
);


export default Travel;
