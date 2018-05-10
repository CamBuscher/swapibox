import React from 'react'
import CardDisplay from '../CardDisplay/CardDisplay'
import './MainPage.css'

const MainPage = ({favorites, findPeople, findPlanets, cards}) => {
  return (
    <div className='mainPage'>
      <header>
        <h1>Swapibox</h1>
        <button className="favorites"> Favorites {favorites.length} </button>
      </header>
      <div className='buttonContainer'>
        <button onClick={findPeople}> People </button>
        <button onClick={findPlanets}> Planets </button>
        <button> Vehicles </button>
      </div>
      <CardDisplay 
        cards={cards}
      />
    </div>
  )
}

export default MainPage