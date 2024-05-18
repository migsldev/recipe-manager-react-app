// Pages.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import Searched from './Searched';
import { Welcome } from './Welcome';

function Pages() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:query" element={<Home />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
      <Route path="/searched/:query" element={<Searched />} />
    </Routes>
    </>
  );
}

export default Pages;
