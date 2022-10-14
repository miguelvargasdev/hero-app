import { useState, useEffect } from 'react';
import heroes from './heroes.js';
import LevelBar from './components/LevelBar/LevelBar';
import Header from './components/Header/Header';
import HeroPickerButton from './components/HeroPickerButton/HeroPickerButton';
import HeroPickerModal from './components/HeroPickerModal/HeroPickerModal';
import HeroCard from './components/HeroCard/HeroCard';
import './App.css';

export default function App() {
  console.log('App rendered.');
  const [playerList, setPlayerList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addPlayer(hero) {
    setPlayerList((prev) => {
      return [
        ...prev,
        { name: hero, playerNumber: playerList.length + 1 },
      ];
    });
  }

  return (
    <>
      <main>
        <Header />
        {playerList.map((obj) => {
          return (
            <HeroCard
              hero={
                heroes.filter((item) => obj.name === item.name)[0]
              }
            ></HeroCard>
          );
        })}
        <HeroPickerButton
          openModal={() => {
            setIsModalOpen(true);
          }}
        />
        <HeroPickerModal
          heroes={heroes}
          playerList={playerList}
          addPlayer={addPlayer}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      </main>
      <LevelBar />
    </>
  );
}
