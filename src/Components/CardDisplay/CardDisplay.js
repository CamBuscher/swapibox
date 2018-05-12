import React from 'react';
import PeopleCard from '../Cards/PeopleCard';
import PlanetCard from '../Cards/PlanetCard';
import VehicleCard from '../Cards/VehicleCard';
import PropTypes from 'prop-types';
import './CardDisplay.css';

const CardDisplay = ({cards, toggleFavorite, favorites}) => {
  const displayedCards = cards.map(card => {
    return determineCardType(card);
  });

  function determineCardType(card) {
    const isFavorite = favorites.find(favorite => favorite.name === card.name) ? true : false;
    if (card.homeworld) {
      return <PeopleCard person={card} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />;
    } else if (card.residents) {
      return <PlanetCard planet={card} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />;
    } else if (card.class) {
      return <VehicleCard vehicle={card} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />;
    }
  }

  const cardCheck = () => {
    return displayedCards.length > 0 ? displayedCards : <h3>Please select a category</h3>;
  };

  return (
    <div className='cardDisplay'>
      {cardCheck()}
    </div>
  );
}; 

CardDisplay.propTypes = {
  cards: PropTypes.array.isrequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
};

export default CardDisplay;