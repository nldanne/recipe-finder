import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Card from "./Card.jsx";

function Popular() {
  
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div className="popular-wrapper">
      <h2>Popular Picks This Week</h2>
      <Splide>
        {popular.map((recipe) => {
          return (
            <Card recipe={recipe}/>
          );
        })}
      </Splide>
    </div>
  )
}


export default Popular;