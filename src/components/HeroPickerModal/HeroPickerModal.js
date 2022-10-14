import React from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import './HeroPickerModal.css';

export default function HeroPickerModal({
  isOpen,
  onClose,
  addPlayer,
  heroes,
  playerList,
}) {
  const props = useSpring({
    top: isOpen
      ? window.innerHeight - window.innerHeight
      : window.innerHeight,
  });

  return (
    <animated.div className='modal' style={props}>
      <button onClick={onClose}>Close</button>
      <div className='hero-portrait-container'>
        {heroes.map((hero) => {
          return (
            <div
              style={
                playerList.some(
                  (element) => element.name === hero.name
                )
                  ? { backgroundColor: 'gray' }
                  : { backgroundColor: hero.color }
              }
              className='hero-portrait'
              onClick={() => {
                if (
                  playerList.some(
                    (element) => element.name === hero.name
                  )
                ) {
                  return;
                } else {
                  addPlayer(hero.name);
                  onClose();
                }
              }}
            >
              {hero.name}
            </div>
          );
        })}
      </div>
    </animated.div>
  );
}
