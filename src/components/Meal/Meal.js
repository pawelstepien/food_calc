import React from 'react';
import MealIngredient from '../MealIngredient/MealIngredient';
import './Meal.scss';

class Meal extends React.Component {
    handleAddIngredient(ingredient) {
        this.props.store.dispatch({
            type: 'ADD_INGREDIENT',
            ingredient: ingredient,
            mealId: this.props.mealId
        });
    }
    handleClick() {
        this.props.showAddIngredientMenu(this.props.mealId);
    }
    mapIngredients(ingredients) {
        console.log('ingredients', ingredients)
        return ingredients.map(
            ingredient => ({
                dupa: console.log('ingredient', ingredient, ingredient.nutrients),
                name: ingredient.name,
                mass: ingredient.mass,
                nutrients: Object.keys(ingredient.nutrients).map(
                    nutrientKey => ingredient.nutrients[nutrientKey] * ingredient.mass / 100)
            })).map(
                calculatedIngredient => (
                    <MealIngredient
                        ingredientName={calculatedIngredient.name}
                        carbohydrates={calculatedIngredient.nutrients.carbohydrates}
                        protein={calculatedIngredient.nutrients.protein}
                        fat={calculatedIngredient.nutrients.fat}
                    />
                )
            );
    }
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
                    <button className="meal-add-button" onClick={this.handleClick.bind(this)}>+</button>
                </header>
                <main>
                    <ul className="meal-ingredients-list">
                        {console.log('meals:', this.props.store.getState().meals,
                            'mealId:', this.props.mealId)}
                        {this.mapIngredients(this.props.store.getState().meals[this.props.mealId])}
                    </ul>
                </main>
            </li>
        );
    }
}

export default Meal;