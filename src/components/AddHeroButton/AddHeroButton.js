import React from 'react'
import './AddHeroButton.css'

export default function AddHeroButton(props){
    return(
        <div onClick={props.newHero} className='hero-card_add-button'></div>
    )
}