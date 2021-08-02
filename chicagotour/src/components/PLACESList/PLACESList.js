import React, { useState } from 'react';
import PLACESSpace from '../PLACESSpace/PLACESSpace';
import './PLACESList.css';
import data from '../../data/places-data.js';

export default function PLACESList() {

    const [query, setQuery] = useState('');

    const places = data.filter((obj) => {
        // true if query is in title
        const inTitle = obj.title.toLowerCase().includes(query)
        // true if query is in address
        const inAddress = obj.address.toLowerCase().includes(query)
        // return true if either one is true
        return inTitle || inAddress
    }).map(({id, title, address, images, hours }) => {

        return (
            <PLACESSpace
                id={id}
                key={`${title}-${id}`}
                name={title}
                address={address}
                image={images}
                hours={hours}
            />
        )
    });

    return (
        <div className="PLACESList">
            <form>
                <input
                    value={query}
                    placeholder='search'
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            {places}
        </div>
    )
}
