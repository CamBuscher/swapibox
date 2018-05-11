import React from 'react'

const PlanetCard = ({planet, toggleFavorite, isFavorite}) => {
  const favoriteIcon = isFavorite ?
    <img src='/images/fullStar.png' className='favoriteIcon' title='Click to add to favorites' onClick={() => toggleFavorite(planet)} /> 
    :
    <img src='/images/star.png' className='favoriteIcon' title='Click to remove from favorites' onClick={() => toggleFavorite(planet)} />

  const residents = () => {
    if (planet.residents.length) {
      return <div>
        <p>Notable residents:</p>
        <ul>
          {planet.residents.map(resident => <li>{resident}</li>)}
        </ul>
      </div>
    } else {
      return <p> No notable resients </p>
    }
  }
  return <div className="card planetsCard">
    <h3>{planet.name}</h3>
    <h4>Population: {planet.population}</h4>
    {favoriteIcon}
    <p>Climate: {planet.climate}</p>
    <p>Terrain: {planet.terrain}</p>
    {residents()}
  </div>;
}

export default PlanetCard