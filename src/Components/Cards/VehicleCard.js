import React from 'react'

const VehicleCard = ({vehicle, toggleFavorite}) => {
  return(
    <div className="card vehiclesCard">
      <h3>{vehicle.name}</h3>
      <h5>Model: {vehicle.model}</h5>
      <button onClick={() => toggleFavorite(vehicle)}> Favorite </button>
      <p>Number of passengers: {vehicle.numPassengers}</p>
      <p>Class: {vehicle.class} </p>
    </div>
  )
}

export default VehicleCard