import React, { useState } from 'react';

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    vegetarian: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
      });
      if (!response.ok) throw new Error('Failed to add new recipe');
      alert('Recipe added successfully!');
      setRecipe({ title: '', ingredients: '', instructions: '', vegetarian: false }); // Reset form
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={recipe.title} onChange={handleChange} required />
      </label>
      <label>
        Ingredients:
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
      </label>
      <label>
        Instructions:
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />
      </label>
      <label className="label-flex">
        Vegetarian:
        <input type="checkbox" name="vegetarian" checked={recipe.vegetarian} onChange={handleChange} className="checkbox-large"/>
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
