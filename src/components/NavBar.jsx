import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add-recipe">Add Recipe</Link>
            {/* Add other navigation links as needed */}
        </nav>
    );
}

export default NavBar;
