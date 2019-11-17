import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { createStore } from 'redux'
import actions from './actions';

import Navigation from './components/Navigation/Navigation';
import Targets from './templates/Targets/Targets';
import Balance from './templates/Balance/Balance';
import Food from './templates/Food/Food';

const foodData = [
    { name: 'Green peas', nutrients: { 
        carbohydrates: 14.5, protein: 5.4, fat: 0.4, saturatedFat: 0.1, monounsaturatedFat: 0, polyunsaturatedFat: 0.2, omega3: 0.035, omega6: 0.152 }},
    { name: 'Egg', nutrients: { 
        carbohydrates: 0.8, protein: 12.6, fat: 9.9, saturatedFat: 3.1, monounsaturatedFat: 3.8, polyunsaturatedFat: 1.4, omega3: 0.074, omega6: 1.148 }},
    { name: 'Mackerel', nutrients: { 
        carbohydrates: 0, protein: 18.6, fat: 13.9, saturatedFat: 3.3, monounsaturatedFat: 5.5, polyunsaturatedFat: 3.3, omega3: 2.670, omega6: 0.219 }},
];

const store = createStore(actions, { foodData: foodData, meals: {'0': [], '1': [] } })

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Navigation />
                <Switch>
                    <Route path="/balance">
                        <Balance store={store} />
                    </Route>
                    <Route path="/targets">
                        <Targets store={store} />
                    </Route>
                    <Route path="/">
                        <Food store={store} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
