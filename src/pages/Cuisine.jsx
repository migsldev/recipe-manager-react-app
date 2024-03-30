import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom'; // pulls out the keyword from the url useParams




function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => { //2. params go to here
        const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`) //3. params update to he name here
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(() => { // runs when the component mounts
        getCuisine(params.type) // 1. run the function here when the compnent gets mounted, params ge filled in based on the URL
        //console.log(params.type);
    },[params.type]); // when params changes, make sure the useEffect function runs
    
    return <Grid 
        animate={{opacity: 1}}
        initial={{ opacity: 0}}
        exit={{ opacity: 0}}
        transition={{duration: 0.5}}
        >
        {cuisine.map((item) => {
            return( // Link tags add link to Recipe.jsx
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt=''/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })};

    </Grid>;
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
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

export default Cuisine
