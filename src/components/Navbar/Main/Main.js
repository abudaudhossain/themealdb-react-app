import React, { useEffect, useState } from 'react';
import MealCart from '../../MealCart/MealCart';
import Meal from '../../Meal/Meal';
import './Main.css'

const Main = () => {
    const [meals, setMeals] = useState([])
    const [selectedMeal, setSelectedMeal] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [])

    // add item in cart 
    const handleAddtocart = (mealName) => {
        if (selectedMeal.indexOf(mealName) === -1){
            const newSeleted = [...selectedMeal, mealName]
            setSelectedMeal(newSeleted);
        }


    }

    // delete item form cart 
    const handelDeletItem = (item) =>{
        const remainingItems = selectedMeal.filter(meal => item !== meal);
        setSelectedMeal(remainingItems)
    }
    // console.log(selectedMeal);
    return (
        <main>
            <div className="meals">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddtocart={handleAddtocart}></Meal>)
                }
            </div>
            <MealCart selectedMeal = {selectedMeal} handelDeletItem = {handelDeletItem}></MealCart>
        </main>
    );
};

export default Main;