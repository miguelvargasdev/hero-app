import React from 'react';
import './AttackDisplay.css'

export default function AttackDisplay(props){
    
    return(
        <div className='hero-card_attack' onClick={props.onClick}>
            <span>{props.value}</span>
        </div>
    );
}