import { useEffect, useState } from "react";
import styled from "styled-components"; 
import { Splide, SplideSlide } from '@splidejs/react-splide'; //Splide is the carousel scroll component, SplideSlide is the each individual card
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
      getVeggie(); //running getPopular once the components get mounted
  }, []); // adding empty array to indicate only run the components when it gets mounted

  const getVeggie = async () => {
      //local storage instead of API
      const check = localStorage.getItem('veggie'); //checking if popular is saved in local storage, if it is NO NEED FOR FETCHING

      if(check){
          setVeggie(JSON.parse(check));

      }else{ 
          //API fetch data
          const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
          );
          const data = await api.json();

          localStorage.setItem('veggie', JSON.stringify(data.recipes));
          console.log(data.recipes);
          setVeggie(data.recipes)
      }
  };
  return (
    <div>
        <Wrapper>
            <h3>Vegetarian Picks</h3>

            <Splide 
                options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem'
                }}>
                {veggie.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    </div>
  );
}

//Styling
const Wrapper = styled.div
    `margin: 4rem 0rem;
    h3 {
        font-size: 3rem;
        padding: 1rem;
    }
    `;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div
    `
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.8));
    `



export default Veggie;
