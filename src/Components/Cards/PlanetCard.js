import React from 'react'

const PlanetCard = ({planet, toggleFavorite}) => {
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
    <button onClick={() => toggleFavorite(planet)}> Favorite </button>
    <p>Climate: {planet.climate}</p>
    <p>Terrain: {planet.terrain}</p>
    {residents()}
  </div>;
}

export default PlanetCard