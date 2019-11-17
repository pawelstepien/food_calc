import React from 'react';
import MealIngredient from '../MealIngredient/MealIngredient';
import './Meal.scss';

class Meal extends React.Component {
    render() {
        return (
            <li className="meal">
                <header className="meal-header">
                    <h5 className="meal-name">
                        {this.props.mealName}
                    </h5>
                    <div className="meal-nutrients">
                        <p className="meal-nutrients-item meal-kcal">
                            100
                        </p>
                        <p className="meal-nutrients-item meal-protein">
                            100
                        </p>
                        <p className="meal-nutrients-item meal-carbohydrates">
                            100
                        </p>
                        <p className="meal-nutrients-item meal-fat">
                            100
                        </p>
                    </div>
                    <button className="meal-add-button">+</button>
                </header>
                <main>
                    <ul className="meal-ingredients-list">
                        <MealIngredient ingredientName="Egg"></MealIngredient>
                        <MealIngredient ingredientName="Bacon"></MealIngredient>
                        <MealIngredient ingredientName="Carrot"></MealIngredient>
                    </ul>
                </main>
            </li>
        );
    }
}
    
export default Meal;