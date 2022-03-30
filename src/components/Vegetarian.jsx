import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';

import Card from './Card.jsx';

import './Popular.css';
import './Card.css';

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const check = localStorage.getItem('veg-recipes');

    if(check) {
      setVegetarian(JSON.parse(check));
    } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
        );
        const data = await api.json();

        localStorage.setItem('veg-recipes', JSON.stringify(data.recipes));
        setVegetarian(data.recipes);
    }

  };

  return (
    <div>
      <div className="wrapper">
        <h3>Our Vegetarian Picks</h3>
        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '2rem',
        }}>
          {vegetarian.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <Card recipe={recipe}/>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Vegetarian;