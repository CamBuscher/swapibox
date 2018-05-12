import React from 'react';
import PropTypes from 'prop-types';

const PlanetCard = ({planet, toggleFavorite, isFavorite}) => {
  const favoriteIcon = isFavorite ?
    <img src='/images/fullStar.png' className='favoriteIcon' title='Click to remove from favoritesClick to add to favorites' onClick={() => toggleFavorite(planet)} /> 
    :
    <img src='/images/star.png' className='favoriteIcon' title='Click to add to favorites' onClick={() => toggleFavorite(planet)} />;

  const residents = () => {
    if (planet.residents.length) {
      return <div>
        <p>Notable residents:</p>
        <ul>
          {planet.residents.map((resident, index) => <li key={`${index} resident`}>{resident}</li>)};
        </ul>
      </div>;
    } else {
      return <p> No notable resients </p>;
    }
  };
  return <div className="card planetsCard">
    <h3>{planet.name}</h3>
    <h4>Population: {planet.population}</h4>
    {favoriteIcon}
    <p>Climate: {planet.climate}</p>
    <p>Terrain: {planet.terrain}</p>
    {residents()}
  </div>;
};

PlanetCard.propTypes = {
  planet: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default PlanetCard;