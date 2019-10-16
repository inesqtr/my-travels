import React from 'react';
import Travel from './Travel';


const travels = [
    {
        destination: "Viana do Castelo",
        country: "Portugal",
        image: "https://storage.needpix.com/rsynced_images/monastery-santa-luzia-978277_1280.jpg",
        distance: "388 km"
    },
    {
        destination: "Nyaungshwe",
        country: "Myanmar",
        image: "https://images.unsplash.com/photo-1516527891761-981ae17a53b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        distance: "9886 km"
    },
    {
        destination: "Rio de Janeiro",
        country: "Brazil",
        image: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_960_720.jpg",
        distance: "7710 km"
    },
    {
        destination: "Vágar",
        country: "Faroe Islands",
        image: "https://cdn.pixabay.com/photo/2019/08/29/18/48/faroe-islands-4439719_960_720.jpg",
        distance: "4300 km"
    },
    {
        destination: "Kilimanjaro",
        country: "Tanzania",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/1024px-Mt._Kilimanjaro_12.2006.JPG",
        distance: "9502 km"
    }
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel key={travel.destination}
                destination={travel.destination}
                country={travel.country}
                image={travel.image}
                distance={travel.distance} />
        ))}
    </div>
);


export default Travels;