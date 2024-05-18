import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiMeal } from "react-icons/gi";
import Layout from "./components/Layout";
import React from 'react';
import Search from "./components/Search";

function App() {
  
  return (
    <div className="App">
      <AppContainer>
        <BrowserRouter>
          <Layout>
            <Nav>
              <LogoContainer>
                <GiMeal />
                <Logo to={'/home'}>Ready to Cook!</Logo>
              </LogoContainer>
              <LogoContainer>

              <AddRecipeButton to="/" style={{marginRight: "20px"}}>Home</AddRecipeButton>
              <AddRecipeButton to="/add-recipe">Add Recipe</AddRecipeButton>
              </LogoContainer>

            </Nav>
            <Category />
            <Pages />
          </Layout>
        </BrowserRouter>
      </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
  padding: 0 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center; // Center the items vertically within the container
  text-align: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 5rem;
  font-weight: 600;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #313131;
`;

const Nav = styled.div`
  padding: 5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  svg {
    font-size: 5.5rem;
    color: #494949;
  }
`;
const AddRecipeButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #313131;
  border-radius: 40%;
  font-weight: 500;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  border-radius: 3px;
`;

export default App;
