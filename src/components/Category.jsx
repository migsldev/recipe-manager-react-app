import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'; //European, American
import {GiNoodles, GiChiliPepper } from 'react-icons/gi'; //asian, Indian
import styled from 'styled-components';  
import { NavLink } from 'react-router-dom'; 

function Category() {
  return (
    <List>
        <SLink  to={'/cuisine/European'} >
            <FaPizzaSlice/>
            <h4>European</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Asian'}>
            <GiNoodles/>
            <h4>Asian</h4>
        </SLink>
        <SLink to={'/cuisine/Middle Eastern'}>
            <GiChiliPepper />
            <h4>Middle Eastern</h4>
        </SLink>
    </List>
  )
}
//styling
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(40deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.9);

    h4 {
        color: white;
        font-size: 0.7rem;
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
