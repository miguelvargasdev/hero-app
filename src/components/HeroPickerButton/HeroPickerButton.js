import React from 'react';
import './HeroPickerButton.css';

export default function HeroPickerButton({ openModal }) {
  return (
    <div onClick={openModal} className='hero-card_add-button'></div>
  );
}
