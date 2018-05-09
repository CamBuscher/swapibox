import React from 'react'
import CardDisplay from '../CardDisplay/CardDisplay'
import './MainPage.css'

const MainPage = ({favorites}) => {
  return (
    <div>
      <header>
        <h1>Swapibox</h1>
        <button className="favorites"> Favorites {favorites.length} </button>
      </header>
      <div className='buttonContainer'>
        <button> People </button>
        <button> Planets </button>
        <button> Vehicles </button>
      </div>
      <CardDisplay />
    </div>
  )
}

export default MainPage