import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
    return (
        <div className="Title">
            <h1>CHICAGOTOUR</h1>
            <div className="Title-Subtitle">Chicago Places to Visit</div>

            <div>
                <NavLink className="nav-link" to="/">List</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default Title;