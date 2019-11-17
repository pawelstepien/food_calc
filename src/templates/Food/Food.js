import React from 'react';
import Meal from '../../components/Meal/Meal';
import './Food.scss';
const Food = () => (
    <section>
        <h1>
        Food
        </h1>
        <header className="meals-list-legend">
            <div className="meal-name"></div>
            <div className="meal-nutrients">
                <p className="meal-kcal meal-nutrients-item">
                    kcal
                </p>
                <p className="meal-protein meal-nutrients-item">
                    protein
                </p>
                <p className="meal-carbohydrates meal-nutrients-item">
                    carbs
                </p>
                <p className="meal-fat meal-nutrients-item">
                    fat
                </p>
            </div>
        </header>
        <main>
        <ol className="meals-list">
            <Meal mealName="Breakfast" />
            <Meal mealName="Lunch" />
        </ol>
        </main>
    </section>
);
export default Food;