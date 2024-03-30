import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {motion} from 'framer-motion';


import React from 'react'

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({}); // mounting the details as an object
    const [activeTab, setActiveTab] = useState("instructions"); //default button active
    const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' });
    const [error, setError] = useState(null); // State for managing error

    useEffect(() => {
        fetchDetails(params.name);
    }, [params.name]);

    const fetchDetails = async () => {
        try{
            const data = await fetch(
                `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            );
            if (!data.ok) { // Check if response is not ok
                throw new Error('Recipe not found'); // Throw an error if recipe not found
            }
            const detailData = await data.json();
            setDetails(detailData); //not an array, an object
        } catch (error) {
            setError(error.message);
        }
    
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe({ ...newRecipe, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRecipe),
            });
            if (!response.ok) {
                throw new Error('Failed to add recipe');
            }
            const data = await response.json();
            setDetails(data);
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    return (
        <DetailWrapper
            animate={{opacity: 1}}
            initial={{ opacity: 0}}
            exit={{ opacity: 0}}
            transition={{duration: 0.5}}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title}/>
            </div>
            <Info
                    animate={{opacity: 1}}
                    initial={{ opacity: 0}}
                    exit={{ opacity: 0}}
                    transition={{duration: 0.5}}
            >
                <Button 
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}>
                    Instructions
                </Button>
                <Button 
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}>
                    Ingredients
                </Button>
                {activeTab === "instructions" && (
                    <div /* prevents from displaying html tags */>
                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
                {/* Add the form for adding a new recipe */}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={newRecipe.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        name="ingredients"
                        value={newRecipe.ingredients}
                        onChange={handleInputChange}
                        placeholder="Ingredients"
                    />
                    <textarea
                        name="instructions"
                        value={newRecipe.instructions}
                        onChange={handleInputChange}
                        placeholder="Instructions"
                    ></textarea>
                    <button type="submit">Add Recipe</button>
                </form>
            </Info>
        </DetailWrapper>
    );
  
}


//styling

const ErrorMessage = styled.div`
    color: red;
`;
const DetailWrapper = styled(motion.div)`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;

    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;

    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;

`;

const Info = styled(motion.div)`
    margin-left: 10rem;
`;

export default Recipe
