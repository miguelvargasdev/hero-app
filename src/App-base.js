import LevelBar from './components/LevelBar/LevelBar';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import HeroPickerButton from './components/HeroPickerButton/HeroPickerButton';
import HeroPickerModal from './components/HeroPickerModal/HeroPickerModal';
import { useState, useEffect } from 'react';
import heroes from './heroes.js';
import './App.css';

export default function App() {
  const [playerList, setPlayerList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addPlayer(hero) {
    setPlayerList((prev) => {
      return [...prev, hero];
    });
  }

  return (
    <>
      <Header />
      <div className='hero-card-container'>
        {playerList.map((el) => {
          return <HeroCard hero={el} />;
        })}
        <HeroPickerButton
          openModal={() => {
            setIsModalOpen(true);
          }}
        />
      </div>

      <LevelBar />
      <HeroPickerModal
        heroes={heroes}
        addPlayer={addPlayer}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
