import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Search from '../components/Search';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [error, setError] = useState(null);
    let { query } = useParams();

    const getSearched = async (searchTerm) => {
        try {
            const response = await fetch(`http://localhost:8000/recipes`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const recipes = await response.json();

            const filteredRecipes = recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (recipe.ingredients && recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            if (filteredRecipes.length === 0) {
                setError('No recipes found');
            } else {
                setSearchedRecipes(filteredRecipes);
                setError(null);
            }
        } catch (error) {
            setError('Network error occurred. Please try again later.');
        }
    };

    useEffect(() => {
        getSearched(query);
    }, [query]);

    return (
        <>
            <Container>
                <Search style={{margin: "10px"}} />
                {
                error ? <ErrorMessage>{error}</ErrorMessage> :

                <CategoryContainer>
                    <Category>
                        <RecipeList>
                            {searchedRecipes.map(recipe => (
                                // <li key={recipe.id}>{recipe.title}</li>
                                <RecipeBox>

                                    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }} >
                                        <img src="#" alt="Recipe Image" />
                                        <h3 >{recipe.title}</h3>
                                    </Link>
                                </RecipeBox>

                            ))}
                        </RecipeList>
                    </Category>
                </CategoryContainer>
                }

            </Container>
        </>
    );
}

// Styling remains the same
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
    font-size: 2rem; // Adjusted for better UI experience
`;


const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  
  // flex: 1;
  // margin: 0 1rem;
`;

const RecipeList = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  padding: 10px;
`;

const RecipeBox = styled.div`
  width: 32%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;  
  background-color: white;
  border: 0.4px solid gray;
`;


export default Searched;
