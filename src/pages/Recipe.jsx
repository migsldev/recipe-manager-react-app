// Recipe.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Recipe() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/recipes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };
  
    fetchData();

  }, []);

  const { id } = useParams();
  const recipe = recipes.find(r => r.id.toString() === id);
  // Log the result of the find operation

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className='re-container'>
      <img src="#" alt="Recipe Image" />
      <h1>{recipe.title}</h1>
      <p className='p1'>Ingredients</p>
      <p className='p2'>{recipe.ingredients}</p>
      <p className='p1'>Instructions</p>
      <p className='p2'>{recipe.instructions}</p>
    </div>
  );
}

export default Recipe;
