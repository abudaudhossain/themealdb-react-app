import React from 'react';
import './Navbar.css'

const Navbar = () => {
    
    return (
        <nav>
            <h3>The meal DB</h3>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
            </div>
            <div>
                <input type="text" name="search" id="" placeholder = "Search meal..."/>
            </div>
        </nav>
    );
};

export default Navbar;