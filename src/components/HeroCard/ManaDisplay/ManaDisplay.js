import React from 'react';
import './ManaDisplay.css'

export default function ManaDisplay(props){
    
    return(
        <div className='hero-card_mana' onClick={props.onClick}>
            <span>{props.value}</span>
        </div>
    );
}