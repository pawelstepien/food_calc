import React from 'react';
import './NutrientBar.scss';

class NutrientBar extends React.Component {
    render() {
        const nestedBars = this.props.children ? 
        <ul className="nutrient-bars-list">
            {this.props.children}
        </ul> :
        '';

        return (
        <li className="nutrient-bar">
            <header className="nutrient-bar-header">
                <h6 className="nutrient-name">
                    {this.props.nutrientName} ({this.props.massUnit})
                </h6>
                <p className="nutrient-consumed-quantity">
                    {this.props.consumedQuantity}
                </p>
                <p className="nutrient-target-quantity">
                    {this.props.targetQuantity}
                </p>
            </header>
            <main>
                <div className="nutrient-bar-wrapper">
                    <div 
                    className="nutrient-bar-fill" 
                    style={{
                        transform: `scaleX(${this.props.consumedQuantity / this.props.targetQuantity})`,
                        backgroundColor: this.props.fillColor ? this.props.fillColor : 'red'
                    }}></div>                
                </div>
            </main>
            {nestedBars}
        </li>
        );
    }
}
    
export default NutrientBar;