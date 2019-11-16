    import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Targets from './templates/Targets/Targets';
import Balance from './templates/Balance/Balance';
import Food from './templates/Food/Food';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/balance">
                        <Balance />
                    </Route>
                    <Route path="/targets">
                        <Targets />
                    </Route>
                    <Route path="/">
                        <Food />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
