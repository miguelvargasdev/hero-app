import React from 'react';
import './ArmorDisplay.css'

export default function ArmorDisplay(props){
    
    return(
        <div className='hero-card_armor' onClick={props.onClick}>
            <span>{props.value}</span>
        </div>
    );
}