import React from 'react';
import './Arrow.css';

export default function Arrow(props) {
    return (
        <div className="arrow-container">
            <div className="arrow" onClick={props.ChangeSlide}></div>
        </div>
    )
}