import React from 'react'
import './CardDisplay.css'

const CardDisplay = ({cards}) => {
  const displayedCards = cards.map(card => {
    return determineCardType(card)
  })

  function determineCardType(obj) {
    if(obj.homeworld) {
      return <div className='card peopleCard'>
        <h3>{obj.name}</h3>
        <h4>{obj.species}</h4>
        <button> Favorite </button>
        <p>Homeworld: {obj.homeworld}</p>
        <p>Population: {obj.homeworldPop}</p>
      </div>
    }
  }

  const cardCheck = () => {
    if (displayedCards.length) {
      return displayedCards
    } else {
      return <h3>Please select a category</h3>
    }
    // displayedCards.length > 0 ? return displayedCards : return <h3>Please select a category</h3>
  } 

  return (
    <div className='cardDisplay'>
      {cardCheck()}
    </div>
  )
} 

export default CardDisplay