import React from 'react'
import CardDisplay from '../CardDisplay/CardDisplay'
import './MainPage.css'

const MainPage = ({ favorites, displayFavorites, findPeople, findPlanets, findVehicles, cards, toggleFavorite, displayedCategory }) => {
  const disabledCheck = (category) => {
    return category === displayedCategory ? true : false
  }

  return (
    <div className='mainPage'>
      <header>
        <h1>Swapibox</h1>
        <button className="favorites" onClick={displayFavorites}> Favorites : {favorites.length} </button>
      </header>
      <div className='buttonContainer'>
        <button onClick={findPeople} disabled={disabledCheck('people')}> People </button>
        <button onClick={findPlanets} disabled={disabledCheck('planets')}> Planets </button>
        <button onClick={findVehicles} disabled={disabledCheck('vehicles')}> Vehicles </button>
      </div>
      <CardDisplay 
        cards={cards}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  )
}

export default MainPage