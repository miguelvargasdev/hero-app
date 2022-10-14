import React from 'react';
import './StatDisplay.css';

export function HealthDisplay(props) {
  return (
    <div
      className='hero-card_health'
      style={{ backgroundColor: `${props.hero.color}` }}
    >
      <div
        onClick={() => {
          props.modifyStat(props.hero, -1, 'health');
        }}
        className='minus-div'
      ></div>
      <div
        onClick={() => props.modifyStat(props.hero, 1, 'health')}
        className='plus-div'
      ></div>
      <span>{props.hero.health}</span>
    </div>
  );
}

export function AttackDisplay(props) {
  return (
    <div className='hero-card_substat hero-card_attack'>
      <div
        onClick={() => {
          props.modifyStat(props.hero, -1, 'attack');
        }}
        className='minus-div'
      ></div>
      <div
        onClick={() => props.modifyStat(props.hero, 1, 'attack')}
        className='plus-div'
      ></div>
      <span>{props.hero.attack}</span>
    </div>
  );
}
export function ManaDisplay(props) {
  return (
    <div className='hero-card_substat hero-card_mana'>
      <div
        onClick={() => {
          props.modifyStat(props.hero, -1, 'mana');
        }}
        className='minus-div'
      ></div>
      <div
        onClick={() => props.modifyStat(props.hero, 1, 'mana')}
        className='plus-div'
      ></div>
      <span>{props.hero.mana}</span>
    </div>
  );
}
export function ArmorDisplay(props) {
  return (
    <div className='hero-card_substat hero-card_armor'>
      <div
        onClick={() => {
          props.modifyStat(props.hero, -1, 'armor');
        }}
        className='minus-div'
      ></div>
      <div
        onClick={() => props.modifyStat(props.hero, 1, 'armor')}
        className='plus-div'
      ></div>
      <span>{props.hero.armor}</span>
    </div>
  );
}
