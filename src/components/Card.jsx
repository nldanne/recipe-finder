import React from 'react';

function Card({ recipe }) {
  return (
    <div className='card'>
      <p>{recipe.title}</p>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  )
}

export default Card;