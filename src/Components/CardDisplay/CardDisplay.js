import React from 'react'
import PeopleCard from '../Cards/PeopleCard'
import PlanetCard from '../Cards/PlanetCard'
import VehicleCard from '../Cards/VehicleCard'
import './CardDisplay.css'

const CardDisplay = ({cards}) => {
  const displayedCards = cards.map(card => {
    return determineCardType(card)
  })

  function determineCardType(obj) {
    if(obj.homeworld) {
      return <PeopleCard person={obj} />

    } else if (obj.residents) {
      return <PlanetCard planet={obj} />
      
    } else if (obj.class) {
      return <div className="card vehiclesCard">
          <h3>{obj.name}</h3>
          <h5>Model: {obj.model}</h5>
          <button> Favorite </button>
          <p>Number of passengers: {obj.numPassengers}</p>
          <p>Class: {obj.class} </p>
        </div>;
    }
  }

  const cardCheck = () => {
    return displayedCards.length > 0 ? displayedCards : <h3>Please select a category</h3>
  } 

  return (
    <div className='cardDisplay'>
      {cardCheck()}
    </div>
  )
} 

export default CardDisplay