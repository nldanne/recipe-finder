import React from 'react';
import './Card.css';

function Card({ recipe }) {
  return (
    <div className='card'>
      <p className='card-title'>{recipe.title}</p>
      <img src={recipe.image} alt={recipe.title} />
      <div className='gradient-bg'></div>
    </div>
  )
}

export default Card;