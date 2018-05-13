import React from 'react';
import PropTypes from 'prop-types';

const VehicleCard = ({vehicle, toggleFavorite, isFavorite}) => {
  const favoriteIcon = isFavorite ?
    <img src='/images/fullStar.png' className='favoriteIcon favorite' title='Click to remove from favorites' onClick={() => toggleFavorite(vehicle)} />
    :
    <img src='/images/star.png' className='favoriteIcon notFavorite' title='Click to add to favorites' onClick={() => toggleFavorite(vehicle)} />;

  return (
    <div className="card vehiclesCard">
      <h3>{vehicle.name}</h3>
      <h5>Model: {vehicle.model}</h5>
      {favoriteIcon}
      <p>Number of passengers: {vehicle.numPassengers}</p>
      <p>Class: {vehicle.class} </p>
    </div>
  );
};

VehicleCard.propTypes = {
  vehicle: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default VehicleCard;