import React from 'react';
import './MealIngredient.scss';

class MealIngredient extends React.Component {
    render() {
        return (
            <li className="meal-ingredient">
                <h6 className="meal-ingredient-name">
                    {this.props.ingredientName}
                </h6>
                <div className="meal-ingredient-nutrients">
                    <p className="meal-nutrients-item meal-kcal meal-ingredient-nutrients-item">
                        100
                    </p>
                    <p className="meal-nutrients-item meal-protein meal-ingredient-nutrients-item">
                        100
                    </p>
                    <p className="meal-nutrients-item meal-carbohydrates meal-ingredient-nutrients-item">
                        100
                    </p>
                    <p className="meal-nutrients-item meal-fat meal-ingredient-nutrients-item">
                        100
                    </p>
                </div>
                <button className="meal-ingredient-edit-button">
                    <img className="edit-icon" alt="edit" src="https://image.flaticon.com/icons/svg/61/61456.svg"/>
                </button>
                <button className="meal-ingredient-remove-button"></button>
            </li>
        );
    }
}
    
export default MealIngredient;