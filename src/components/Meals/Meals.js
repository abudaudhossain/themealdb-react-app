import React, { useEffect } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    // const [meals, setMeals] = useState({});

    useEffect(() => {
        fetch('./search.JSON')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return (
        <div className="meals">
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
            <Meal></Meal>
        </div>
    );
};

export default Meals;