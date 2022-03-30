import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './Recipe.css';

function Recipe() {
  const [details, setDetails] = useState({});
  const [isActive, setIsActive] = useState('instructions');
  let params = useParams();

  
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const dataDetails = await data.json();
      console.log(dataDetails);
      setDetails(dataDetails);      
    };

    fetchRecipeDetails();
  }, [params.name]);
  


  return (
    <div className="detail-wrapper">
      <div className="image-title__container">
        <h2>{details.title}</h2>
        <img src={details.image} alt='' /> 
      </div>
      <section className="info">
        <button 
          className={`btn-recipe ${isActive === 'instructions' ? 'active' : ''}`} 
          onClick={() => setIsActive('instructions')} 
        > 
          Instructions
        </button>
        <button 
          className={`btn-recipe ${isActive === 'ingredients' ? 'active' : ''}`} 
          onClick={() => setIsActive('ingredients')}
        >
          Ingredients
        </button>
      {isActive === 'instructions' && (
          <div className="instruction">
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          </div>
        )}
      {isActive === 'ingredients' && (
        <ul>
            {details.extendedIngredients?.map((ingredient) => {
              return (
                <li key={ingredient.id}>{ingredient.original}</li>
              );
            })}
          </ul>
      )}

      </section>
    </div>
  );
}

export default Recipe;