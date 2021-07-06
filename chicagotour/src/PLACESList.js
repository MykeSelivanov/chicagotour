import React from 'react';
import PLACESSpace from './PLACESSpace';
import './PLACESList.css';
import data from './places-data.json';

function PLACESList() {

    const places = data.map((obj) => {
        const { title, address, images, hours } = obj;
        return (
            <PLACESSpace
                key={title}
                name={title}
                address={address}
                image={images}
                hours={hours}
            />
        )
    });

    return (
        <div className="PLACESList">
            {places}
        </div>
    )
}

export default PLACESList;