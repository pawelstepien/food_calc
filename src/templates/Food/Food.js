import React from 'react';
import Meal from '../../components/Meal/Meal';
import AddIngredientMenu from '../../components/AddIngredientMenu/AddIngredientMenu';
import './Food.scss';

class Food extends React.Component {
    state = {
        showAddIngredientMenu: false,
        addIngredientMenuMealId: null
    }
    showAddIngredientMenu(mealId) {
        this.setState({
            showAddIngredientMenu: true,
            addIngredientMenuMealId: mealId
        });
    }
    hideAddIngredientMenu() {
        this.setState({
            showAddIngredientMenu: false,
            addIngredientMenuMealId: null
        });
    }
    mapStateToProps(state) {

    }
    render() {
        return(
            <section className="food-wrapper">
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
                    <Meal 
                    mealName="Breakfast" key="0" mealId={0} 
                    showAddIngredientMenu={this.showAddIngredientMenu.bind(this)} 
                    store={this.props.store}
                    />
                    <Meal 
                    mealName="Lunch" key="1" mealId={1} 
                    showAddIngredientMenu={this.showAddIngredientMenu.bind(this)} 
                    store={this.props.store}
                    />
                </ol>
                </main>
                <AddIngredientMenu 
                options={this.props.store.getState().foodData.map(
                    food => ({ ...food, value: food.name, label: food.name }))}
                store={this.props.store}
                mealId={this.state.addIngredientMenuMealId}
                show={this.state.showAddIngredientMenu}
                hideMenu={this.hideAddIngredientMenu.bind(this)}
                />
            </section>
        )
    }
};
export default Food;