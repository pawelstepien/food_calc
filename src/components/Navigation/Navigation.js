import React from 'react';
import './Navigation.scss';
import {
    Link
} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
        <nav className="navigation">
            <ul className="links-list">
                <li>
                    <Link to="/">Food</Link>
                </li>
                <li>
                    <Link to="/balance">Balance</Link>
                </li>
                <li>
                    <Link to="/targets">Targets</Link>
                </li>
            </ul>
        </nav>
        );
    }
}
    
export default Navigation;