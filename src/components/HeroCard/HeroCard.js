import React from 'react';
import {
  HealthDisplay,
  AttackDisplay,
  ManaDisplay,
  ArmorDisplay,
} from './StatDisplay/StatDisplay';
import { PlayerContext } from '../../App';
import './HeroCard.css';

export default function HeroCard({ hero }) {
  console.log(`${hero.name} rendered.`);
  const [heroStats, setHeroStats] = React.useState(hero);

  function modifyStat(stats, modifier, statType) {
    if (stats[statType] <= 0 && modifier < 0) {
      return null;
    }
    console.log(hero.playerNumber);

    setHeroStats((currentList) => {
      return {
        ...currentList,
        [statType]: currentList[statType] + modifier,
      };
    });
  }

  return (
    <div className='hero-card_container'>
      <HealthDisplay modifyStat={modifyStat} hero={heroStats} />
      <div className='hero-card_sub-stats'>
        <AttackDisplay modifyStat={modifyStat} hero={heroStats} />
        <ManaDisplay modifyStat={modifyStat} hero={heroStats} />
        <ArmorDisplay modifyStat={modifyStat} hero={heroStats} />
      </div>
    </div>
  );
}
