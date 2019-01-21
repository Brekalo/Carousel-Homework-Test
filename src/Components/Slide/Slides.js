import React from 'react';
import './Slides.css';

export default function Slide(props) {

    let imageUrl = require(`.././Images/${props.id}.jpg`);
    const styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className="slide-container" style={styles}></div>
    )
}
