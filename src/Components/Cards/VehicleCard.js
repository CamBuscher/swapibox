import React from 'react'

const VehicleCard = ({vehicle, toggleFavorite}) => {
  const favoriteIcon = isFavorite ?
    <img src='/images/fullStar.png' className='favoriteIcon' title='Click to add to favorites' onClick={() => toggleFavorite(person)} />
    :
    <img src='/images/star.png' className='favoriteIcon' title='Click to remove from favorites' onClick={() => toggleFavorite(person)} />

  return(
    <div className="card vehiclesCard">
      <h3>{vehicle.name}</h3>
      <h5>Model: {vehicle.model}</h5>
      {favoriteIcon}
      <p>Number of passengers: {vehicle.numPassengers}</p>
      <p>Class: {vehicle.class} </p>
    </div>
  )
}

export default VehicleCard