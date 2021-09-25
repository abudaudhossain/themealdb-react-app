import React from 'react';
import "./MealCart.css"
const MealCart = (props) => {
    console.log(props);
    return (
        <div className="cart">
            <h2>Add Items</h2>
            <ul>
                {
                    props.selectedMeal.map(item => <li key={item}>
                        {item}
                        <span
                            onClick={() => props.handelDeletItem(item)} className="close">
                            &#10006;
                        </span>
                    </li>)
                }

            </ul>
        </div>
    );
};

export default MealCart;