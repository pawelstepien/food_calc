import React from 'react';
import './AddIngredientMenu.scss';
import Select from 'react-select';

// const options = [
//     { value: 'Green peas', label: 'Green peas', carbohydrates: 14.5, protein: 5.4, fat: 0.4, saturatedFat: 0.1, monounsaturatedFat: 0, polyunsaturatedFat: 0.2, omega3: 0.035, omega6: 0.152 },
//     { value: 'Egg', label: 'Egg', carbohydrates: 0.8, protein: 12.6, fat: 9.9, saturatedFat: 3.1, monounsaturatedFat: 3.8, polyunsaturatedFat: 1.4, omega3: 0.074, omega6: 1.148 },
//     { value: 'Mackerel', label: 'Mackerel', carbohydrates: 0, protein: 18.6, fat: 13.9, saturatedFat: 3.3, monounsaturatedFat: 5.5, polyunsaturatedFat: 3.3, omega3: 2.670, omega6: 0.219 },
// ];

class AddIngredientMenu extends React.Component {
    state = {
        selectedOption: null,
        mass: 0
    };
    handleSubmit(event) {
        event.preventDefault();
        console.log('submit', { ...this.state.selectedOption, mass: this.state.mass })
        this.props.store.dispatch({
            type: 'ADD_INGREDIENT',
            mealId: this.props.mealId,
            ingredient: { ...this.state.selectedOption, mass: this.state.mass }
        })
        this.props.hideMenu();
    }
    handleSelectChange = selectedOption => {
        console.log(selectedOption)
        this.setState(
            { selectedOption: selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };
    handleMassInputChange(event) {
        this.setState(
            { mass: event.target.value }
        );
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="add-ingredient-menu">
                <form action="/" onSubmit={this.handleSubmit.bind(this)}>
                    <Select
                        value={this.state.selectedOption}
                        onChange={this.handleSelectChange.bind(this)}
                        options={this.props.options}
                    />
                    <input type="number" placeholder="mass (g)"  onChange={this.handleMassInputChange.bind(this)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddIngredientMenu;