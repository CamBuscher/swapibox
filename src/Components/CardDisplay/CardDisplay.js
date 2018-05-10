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

    } else if (obj.residents) {
      const residents = () => {
        if (obj.residents.length) {
          return <div>
            <p>Notable residents:</p>
            <ul>
              {obj.residents.map(resident => <li>{resident}</li>)}
            </ul>
          </div>
        } else {
          return <p> No notable resients </p>
        }
      }
      return <div className="card planetsCard">
        <h3>{obj.name}</h3>
        <h4>Population: {obj.population}</h4>
        <button> Favorite </button>
        <p>Climate: {obj.climate}</p>
        <p>Terrain: {obj.terrain}</p>
        {residents()}
      </div>;
      
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