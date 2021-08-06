import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageHeader.css';
import RandomPlace from '../RandomPlace/RandomPlace';

export default function PageHeader() {
    return (
        <div className="PageHeader">
            <h1>CHICAGOTOUR</h1>
            <div className="PageHeader-Subtitle">Chicago Places to Visit</div>

            <div>
                <RandomPlace />
                <br />
                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    exact to="/">List</NavLink>

                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    to="/about">About</NavLink>

            </div>
        </div>
    )
}
