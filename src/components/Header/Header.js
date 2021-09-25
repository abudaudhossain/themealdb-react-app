import React from 'react';
import Navbar from '../Navbar/Navbar';
// import mealicon from '../../meal-icon.png'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header>
                <h1>Welcame to The meal DB </h1>
                <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
            </header>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;