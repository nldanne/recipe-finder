import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Card from "./Card.jsx";
import './Popular.css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular-recipes');

    if(check) {
      setPopular(JSON.parse(check));
    } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
        );
        const data = await api.json();

        localStorage.setItem('popular-recipes', JSON.stringify(data.recipes));
        setPopular(data.recipes);
    }

  };

  return (
    <div>
      <div className="wrapper">
        <h3>Popular Picks This Week</h3>
        <Splide options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '2rem',
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card recipe={recipe}/>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  )
}


export default Popular;