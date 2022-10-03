import React from 'react';
import ArmorDisplay from './ArmorDisplay/ArmorDisplay';
import AttackDisplay from './AttackDisplay/AttackDisplay';
import HealthDisplay from './HealthDisplay/HealthDisplay'
import './HeroCard.css'
import ManaDisplay from './ManaDisplay/ManaDisplay';



export default function HeroCard(){
    const [stats, setStats] = React.useState({
        name: 'Arcanas',
        health: 40,
        attack: 3,
        mana: 12,
        armor: 2
    })
    function handleClick(key, value){
        setStats({...stats, [key]: Number(value) - 1});
    }
    return(
        <div className='hero-card_container'>
            <HealthDisplay value={stats.health} onClick={()=>handleClick('health', stats.health)}/>
            <div className='hero-card_sub-stats'>
                <AttackDisplay value={stats.attack} onClick={()=>handleClick('attack', stats.attack)}/>
                <ManaDisplay value={stats.mana} onClick={()=>handleClick('mana', stats.mana)}/>
                <ArmorDisplay value={stats.armor} onClick={()=>handleClick('armor', stats.armor)}/>
            </div>
        </div>
    );
}