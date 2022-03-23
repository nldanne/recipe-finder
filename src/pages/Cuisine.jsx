import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

import './Cuisine.css';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );

    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  return (
    <div className='grid'>
      {cuisine.map((item) => {
        return (
          <div className='grid-card' key={item.id}>
            <img src={item.image} alt={item.title} className='grid-card__img'></img>
            <h4 className='gird-card__title' >{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}


export default Cuisine;