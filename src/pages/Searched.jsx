import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import './Cuisine.css';

function Searched() {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {

    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );

    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className='grid'>
      {searchedRecipe.map((item) => {
        return (
          <div className='grid-card' key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} className='grid-card__img'></img>
              <h4 className='gird-card__title' >{item.title}</h4>
            </Link>
          </div>
        )
      })}
    </div>
  );
}


export default Searched;