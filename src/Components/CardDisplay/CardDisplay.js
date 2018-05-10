import React from 'react'
import './CardDisplay.css'

const CardDisplay = ({cards}) => {
  const displayedCards = cards.map(card => {
    return determineCardType(card)
  })

  function determineCardType(obj) {
    if(obj.homeworld) {
      return <div className='card'>
        <h5>{obj.name}</h5>
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