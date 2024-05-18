import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Search from '../components/Search';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [catHandle, setCatHandle] = useState('')
  let { query } = useParams();

  const filteredRecipes = recipes.filter(recipe => {
    if (filter === 'all') return true;
    if (filter === 'vegetarian') return recipe.vegetarian;
    if (filter === 'non-vegetarian') return !recipe.vegetarian && recipe.category !== 'Dessert';
    if (filter === 'dessert') return recipe.category === 'Dessert';
    return recipe.title.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/recipes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setRecipes(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
        setLoading(false);
        // Handle the error state
      }
    };

    fetchData();

  }, []);

  useEffect(() => {

    if (query === ":vegetarian") {
      setCatHandle("vegetarian")
    } else if (query === ":non-vegetarian") {
      setCatHandle("non-vegetarian")
    } else if (query === ":dessert") {
      setCatHandle("dessert")
    } else{
      setCatHandle("")
    }
  }, [query])

  if (loading) return <p>Loading</p>;


  const vegetarianRecipes = recipes.filter(recipe => recipe.vegetarian);
  const nonVegetarianRecipes = recipes.filter(recipe => !recipe.vegetarian);
  const desserts = recipes.filter(recipe => recipe.category === "Dessert");


  return (
    <Container>
      <Search />
      {catHandle === 'vegetarian' ? (
        <CategoryContainer>
          <Category>
            <h1>Vegetarian Recipes</h1>
            <RecipeList>
              {vegetarianRecipes.map(recipe => (
                // <li key={recipe.id}>{recipe.title}</li>
                <RecipeBox>

                  <Link to={`/recipe/${recipe.id}`} style={{textDecoration: "none"}} >
                    <img src="#" alt="Recipe Image" />
                    <h3 >{recipe.title}</h3>
                  </Link>
                </RecipeBox>

              ))}
            </RecipeList>
          </Category>
        </CategoryContainer>
      ) : catHandle === 'non-vegetarian' ? (
        <CategoryContainer>
           <Category>
            <h1>Non Vegetarian Recipes</h1>

            <RecipeList>
              {nonVegetarianRecipes.map(recipe => (
                // <li key={recipe.id}>{recipe.title}</li>
                <RecipeBox>
                  <Link to={`/recipe/${recipe.id}`} style={{textDecoration: "none"}} >
                    <img src="#" alt="Recipe Image" />
                    <h3 >{recipe.title}</h3>
                  </Link>
                </RecipeBox>
              ))}
            </RecipeList>
          </Category>
        </CategoryContainer>
      ) : catHandle === 'dessert' ? (
        <CategoryContainer>
          <Category>
            <h1>Desserts</h1>

            <RecipeList>
              {desserts.map(recipe => (
                // <li key={recipe.id}>{recipe.title}</li>
                <RecipeBox>

                  <Link to={`/recipe/${recipe.id}`} style={{textDecoration: "none"}} >
                    <img src="#" alt="Recipe Image" />
                    <h3 >{recipe.title}</h3>
                  </Link>
                </RecipeBox>

              ))}
            </RecipeList>
          </Category>
        </CategoryContainer>
      ) : catHandle === '' ? (
        <CategoryContainer>
          <Category>
            <h1>Vegetarian Recipes</h1>
            <RecipeList>
              {vegetarianRecipes.map(recipe => (
                // <li key={recipe.id}>{recipe.title}</li>
                <RecipeBox>

                  <Link to={`/recipe/${recipe.id}`} style={{textDecoration: "none"}} >
                    <img src="#" alt="Recipe Image" />
                    <h3 >{recipe.title}</h3>
                  </Link>
                </RecipeBox>

              ))}
            </RecipeList>
          </Category>
          <Category>
            <h1>Non Vegetarian Recipes</h1>

            <RecipeList>
              {nonVegetarianRecipes.map(recipe => (
                // <li key={recipe.id}>{recipe.title}</li>
                <RecipeBox>
                  <Link to={`/recipe/${recipe.id}`} style={{textDecoration: "none"}} >
                    <img src="#" alt="Recipe Image" />
                    <h3 >{recipe.title}</h3>
                  </Link>
                </RecipeBox>
              ))}
            </RecipeList>
          </Category>

          <Category>
            <h1>Desserts</h1>

            <RecipeList>
              {desserts.map(recipe => (
                // <li key={recipe.id}>{recipe.title}</li>
                <RecipeBox>

                  <Link to={`/recipe/${recipe.id}`} style={{textDecoration: "none"}} >
                    <img src="#" alt="Recipe Image" />
                    <h3 >{recipe.title}</h3>
                  </Link>
                </RecipeBox>

              ))}
            </RecipeList>
          </Category>
        </CategoryContainer>
      ) : (
        <div>error</div>
      )}

      <ChefImage src="/images/chef.svg" alt="Chef Image" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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


const ChefImage = styled.img`
  margin-top: 0.2rem; // Space between the button and the image
  width: 400px; // Set appropriate size
  height: auto;
`;


export default Home;

