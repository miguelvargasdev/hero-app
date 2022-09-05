import React from 'react';
import './HeroCard.css'


function HealthComponent(){
    return(
        <div className='hero-card_health'>
            <span>40</span>
        </div>
    );
}
function AttackComponent(){
    return(
        <div className='hero-card_attack'>
            <span>3</span>
        </div>
    );
}
function ManaComponent(){
    return(
        <div className='hero-card_mana'>
            <span>12</span>
        </div>
    );
}
function ArmorComponent(){
    return(
        <div className='hero-card_armor'>
            <span>2</span>
        </div>
    );
}



export default function HeroCard(){
    return(
        <div className='hero-card_container'>
            <HealthComponent />
            <div className='hero-card_sub-stats'>
                <AttackComponent />
                <ManaComponent />
                <ArmorComponent />
            </div>

        </div>
    );
}