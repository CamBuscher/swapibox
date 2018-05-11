import React from 'react'
import PeopleCard from '../Cards/PeopleCard'
import PlanetCard from '../Cards/PlanetCard'
import VehicleCard from '../Cards/VehicleCard'
import './CardDisplay.css'

const CardDisplay = ({cards, toggleFavorite}) => {
  const displayedCards = cards.map(card => {
    return determineCardType(card)
  })

  function determineCardType(obj) {
    if(obj.homeworld) {
      return <PeopleCard person={obj} toggleFavorite={toggleFavorite} />
    } else if (obj.residents) {
      return <PlanetCard planet={obj} toggleFavorite={toggleFavorite} />
    } else if (obj.class) {
      return <VehicleCard vehicle={obj} toggleFavorite={toggleFavorite} />
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