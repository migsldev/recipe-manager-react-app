import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [error, setError] = useState(null); // State to handle errors
    let params = useParams();

    const getSearched = async (name) => {
        try {
            const data = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
            );
    
            if (!data.ok) {
                throw new Error('Failed to fetch recipes');
            }
    
            const recipes = await data.json();
            if (recipes.results.length === 0) {
                setError('Recipe not found');
            } else {
                setSearchedRecipes(recipes.results);
                setError(null); // Clear any previous error message
            }
        } catch (error) {
            setError('Network error occurred. Please try again later.');
        }
    };

    useEffect(() => {
        getSearched(params.search);

    }, [params.search]);

    return (<>{error && <ErrorMessage>{error}</ErrorMessage>} {/* Display error message if there's an error */}
            <Grid
                animate={{opacity: 1}}
                initial={{ opacity: 0}}
                exit={{ opacity: 0}}
                transition={{duration: 0.5}}
            >
                {searchedRecipes.map((item) => {
                    return(
                        <Card 
                            animate={{opacity: 1}}
                            initial={{ opacity: 0}}
                            exit={{ opacity: 0}}
                            transition={{duration: 0.5}}
                            key={item.id}
                        >
                            <Link to={'/recipe/' + item.id}>
                            <img src={item.image} alt="item.title"/>
                            <h4>{item.title}</h4>
                            </Link>
                        </Card>
                    )
                })}
            </Grid>
        </>
    );
}


//styling
const Grid = styled(motion.div) `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled(motion.div)`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;
const ErrorMessage = styled.p`
    color: red;
    text-align: center;
    font-size: 5rem;
`;



export default Searched
