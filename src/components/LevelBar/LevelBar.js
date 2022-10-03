import React from 'react';
import levelupLogo from './level-up-btn.png';
import levelBlip from './level-blip.png'
import './LevelBar.css'

export default function LevelBar(props){
    return(
        <footer onClick={props.onClick}>
            <img src={levelupLogo} className='level-up-button'></img>
            <ul className='blip-container'>
                <li><img src={levelBlip}></img></li>
                <li><img src={levelBlip}></img></li>
                <li><img src={levelBlip}></img></li>
                <li><img src={levelBlip}></img></li>
                <li><img src={levelBlip}></img></li>
                <li><img src={levelBlip}></img></li>
                <li><img src={levelBlip}></img></li>
                <li><img src={levelBlip}></img></li>
            </ul>
        </footer>
    );
}