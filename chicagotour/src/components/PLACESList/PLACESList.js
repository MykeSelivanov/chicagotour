import React, { useState } from 'react';
import PLACESSpace from '../PLACESSpace/PLACESSpace';
import './PLACESList.css';
import data from '../../places-data.json';

export default function PLACESList() {

    const [query, setQuery] = useState('');

    const places = data.map(({ title, address, images, hours }, i) => {

        return (
            <PLACESSpace
                id={i}
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
