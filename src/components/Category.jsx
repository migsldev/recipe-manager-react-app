import { FaLeaf, FaDrumstickBite, FaIceCream } from 'react-icons/fa'; 
import styled from 'styled-components';  
import { NavLink } from 'react-router-dom'; 

function Category() {
  return (
    <List>
        <SLink to={'/home/:vegetarian'}>
            <FaLeaf />
            <h4>Vegetarian</h4>
        </SLink>
        <SLink to={'/home/:non-vegetarian'}>
            <FaDrumstickBite />
            <h4>Non-Vegetarian</h4>
        </SLink>
        <SLink to={'/home/:dessert'}>
            <FaIceCream />
            <h4>Dessert</h4>
        </SLink>
    </List>
  )
}

//styling
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 40%;
    margin-top: -3rem;
    margin-right: 5rem;
    margin-left: 5rem;
    margin-bottom: 3rem;
    text-decoration: none;
    background: linear-gradient(40deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(1.5);

    h4 {
        color: white;
        font-size: 0.6rem;
    }
    svg {
        color: white;
        font-size: 1.5rem;

    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }

`;


export default Category
