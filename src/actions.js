function actions(state = [], action) {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            console.log(state, action)
            state.meals[action.mealId].push(action.ingredient);
            return state;
        default:
            return state;
    }
}
export default actions;