import React from 'react';
import './HealthDisplay.css'

export default function HealthDisplay(props){
    

    return(
        <div className='hero-card_health' onClick={props.onClick}>
            <span>{props.value}</span>
        </div>
    );
}