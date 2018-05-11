import React from 'react'

const PeopleCard = ({person, toggleFavorite, isFavorite}) => {
  const favoriteIcon = isFavorite ?
    <img src='/images/fullStar.png' className='favoriteIcon' title='Click to add to favorites' onClick={() => toggleFavorite(person)} />
    :
    <img src='/images/star.png' className='favoriteIcon' title='Click to remove from favorites' onClick={() => toggleFavorite(person)} />

  return (
    <div className='card peopleCard'>
      <h3>{person.name}</h3>
      <h4>{person.species}</h4>
      {favoriteIcon}
      <p>Homeworld: {person.homeworld}</p>
      <p>Population: {person.homeworldPop}</p>
    </div>
  )
}

export default PeopleCard