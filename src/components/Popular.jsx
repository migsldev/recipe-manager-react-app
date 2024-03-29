import { useEffect, useState } from "react";
import styled from "styled-components"; //create functions and attach components with styling attached to it

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular(); //running getPopular once the components get mounted
    }, []); // adding empty array to indicate only run the components when it gets mounted

    const getPopular = async () => {
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();
        //console.log(data.recipes);
        setPopular(data.recipes)
    };

  return <div>

    {popular.map((recipe) => {
        return (
            <Wrapper>
                <h3>Popular Picks</h3>
                {popular.map((recipe) => {
                    return(
                        <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}></img>
                        </Card>
                    );
                })}

            </Wrapper>
        );
    })}
    </div>;
}

const Wrapper = styled.div
    `margin: 4rem 0rem;`;

const Card = styled.div
    `min-height: 25rem;
    border-radius: 2rem;`;
    
export default Popular;
