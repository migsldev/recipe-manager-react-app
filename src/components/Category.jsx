import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'; //European, American
import {GiNoodles, GiChiliPepper } from 'react-icons/gi'; //asian, Indian
import styled from 'styled-components';  
import { NavLink } from 'react-router-dom'; //Navlink adds "active class" which you can add specific styling

function Category() {
  return (
    <List>
        <NavLink  to={'/cuisine/European'} >
            <FaPizzaSlice/>
            <h4>European</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/Asian'}>
            <GiNoodles/>
            <h4>Asian</h4>
        </NavLink>
        <NavLink to={'/cuisine/Indian'}>
            <GiChiliPepper />
            <h4>Indian</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div
    `
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;


export default Category
