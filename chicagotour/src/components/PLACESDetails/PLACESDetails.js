import data from '../../places-data.json';
import React from 'react'

export default function PLACESDetails(props) {
    const { id } = props.match.params;
    const { images, title, desc, hours, features, geo } = data[id];

    return (
        <div>
            <div>
                <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt="Hello"/>
            </div>

            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
                <p>{hours}</p>
                <p>{features}</p>
                <p>{geo.lat} {geo.lon}</p>
            </div>

        </div>
    )
}
