import data from '../../places-data.json';
import React from 'react';
import './PLACESDetails.css';

export default function PLACESDetails(props) {
    const { id } = props.match.params;
    const { images, title, desc, hours, features, geo } = data[id];

    return (
        <div className="PLACESDetails">
            <div className="PLACESDetails-image">
                <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt="Hello"/>
            </div>

            <div className="PLACESDetails-info">
                <h1 className="PLACESDetails-title">{title}</h1>
                <p className="PLACESDetails-desc">{desc}</p>
                <p className="PLACESDetails-hours">{hours}</p>
                <p className="PLACESDetails-features">{features}</p>
                <p className="PLACESDetails-geo">{geo.lat} {geo.lon}</p>
            </div>

        </div>
    )
}
