import React from 'react';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear().toString();

    return (
        <div className="Footer" style={{bottom: "0", position: "fixed"}}>
            <div className="Footer-Subtitle">Myke Selivanov copyright {year}</div>
        </div>
    )
}
