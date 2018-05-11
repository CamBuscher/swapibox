import React from 'react'
import CardDisplay from '../CardDisplay/CardDisplay'
import './MainPage.css'

const MainPage = ({numFavorites, findPeople, findPlanets, findVehicles, cards, toggleFavorite}) => {
  return (
    <div className='mainPage'>
      <header>
        <h1>Swapibox</h1>
        <button className="favorites"> Favorites : {numFavorites} </button>
      </header>
      <div className='buttonContainer'>
        <button onClick={findPeople}> People </button>
        <button onClick={findPlanets}> Planets </button>
        <button onClick={findVehicles}> Vehicles </button>
      </div>
      <CardDisplay 
        cards={cards}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default MainPage