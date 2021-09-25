import React from 'react';
import './Meal.css';

const Meal = (props) => {

    const {strMeal, strInstructions, strMealThumb, strYoutube} = props.meal;
    return (
        <div className="meal">
            <img src={strMealThumb} alt="meeal-img" />
            <div className="meal-info">
                <h2>{strMeal}</h2>
                <p>{strInstructions.slice(0, 200)}...<a href="/more">More</a></p>
                <button onClick = {() =>{props.handleAddtocart(strMeal)}}>Add Item</button>
               <a href={strYoutube} target="_blank" rel="noopener noreferrer"> <button>Details</button></a>
            </div>
        </div>
    );
};

export default Meal;