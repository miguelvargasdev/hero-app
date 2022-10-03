import LevelBar from './components/LevelBar/LevelBar';
import Header from './components/Header/Header';
import HeroCard from './components/HeroCard/HeroCard';
import AddHeroButton from './components/AddHeroButton/AddHeroButton';
import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [heroList, setHeroList] = useState([]);
  
  function createNewHero(){
    const arcanus = {
      name: 'Arcanus',
      health: 25,
      mana: 35,
      armor: 1,
      attack: 5
    }
    setHeroList(prev => ({
      ...prev, arcanus
      
    }))    

  }
  function checkState(){
    console.log(heroList)
  }
  
  return (
    <>
      <Header />
      <HeroCard />
      <AddHeroButton newHero={createNewHero}/>
      <LevelBar />
    </>

  );
}

