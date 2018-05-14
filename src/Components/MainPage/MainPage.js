import React from 'react';
import CardDisplay from '../CardDisplay/CardDisplay';
import PropTypes from 'prop-types';
import './MainPage.css';

const MainPage = ({ favorites, displayFavorites, findPeople, findPlanets, findVehicles, cards, toggleFavorite, displayedCategory }) => {
  const disabledCheck = (category) => {
    return category === displayedCategory ? true : false;
  };

  const favoritesReminder = () => {
    return displayedCategory === 'favorites' && favorites.length === 0 ?
      <h3>You don't have any favorites yet!</h3> :
      <div></div>;
  };

  return (
    <div className='mainPage'>
      <header>
        <h1>Swapibox</h1>
        <button className="favorites" onClick={displayFavorites} disabled={disabledCheck('favorites')}> Favorites : {favorites.length} </button>
        {favoritesReminder()}
      </header>
      <div className='buttonContainer'>
        <button onClick={findPeople} disabled={disabledCheck('people')}> People </button>
        <button onClick={findPlanets} disabled={disabledCheck('planets')}> Planets </button>
        <button onClick={findVehicles} disabled={disabledCheck('vehicles')}> Vehicles </button>
      </div>
      <CardDisplay 
        cards={cards}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  );
};

MainPage.propTypes = {
  favorites: PropTypes.array.isRequired,
  displayFavorites: PropTypes.func.isRequired,
  findPeople: PropTypes.func.isRequired,
  findPlanets: PropTypes.func.isRequired,
  findVehicles: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  displayedCategory: PropTypes.string.isRequired
};

export default MainPage;