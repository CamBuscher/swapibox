import React from 'react'

const PeopleCard = ({person, toggleFavorite}) => {
  return (
    <div className='card peopleCard'>
      <h3>{person.name}</h3>
      <h4>{person.species}</h4>
      <button onClick={() => toggleFavorite(person)}> Favorite </button>
      <p>Homeworld: {person.homeworld}</p>
      <p>Population: {person.homeworldPop}</p>
    </div>
  )
}

export default PeopleCard