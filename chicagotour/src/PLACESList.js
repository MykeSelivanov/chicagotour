import React from 'react';
import PLACESSpace from './PLACESSpace';
import './PLACESList.css';

function PLACESList() {
    return (
        <div className="PLACESList">
            <PLACESSpace
                name="Willis Tower"
                address="233 S Wacker Dr, Chicago, IL 60606"
                image="willis-tower.png" />
            <PLACESSpace
                name="Chicago Riverwalk"
                address="Chicago Riverwalk, Chicago, IL 60601"
                image="chicago-riverwalk.jpeg"
            />
            <PLACESSpace
                name="Lincoln Park Zoo"
                address="2001 N Clark St, Chicago, IL 60614"
                image="lincoln-zoo.jpeg"
            />
            <PLACESSpace
                name="Metric Coffee Co."
                address="2021 W Fulton St suite k-101b, Chicago, IL 60612"
                image="metric-coffee.jpeg"
            />
            <PLACESSpace
                name="Millenium Park"
                address="201 E Randolph St, Chicago, IL 60602"
                image="millenium-park.jpeg"
            />
            <PLACESSpace
                name="Buckingham Fountain"
                address="301 S Columbus Dr, Chicago, IL 60605"
                image="buckingham-fountain.png"
            />

        </div>
    )
}

export default PLACESList;