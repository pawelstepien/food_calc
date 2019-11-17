import React from 'react';
import NutrientBar from '../../components/NutrientBar/NutrientBar';
import './Balance.scss';

const Balance = () => (
    <section>
        <h1>
            Balance
        </h1>
        <ul className="nutrient-bars-list">
            <NutrientBar nutrientName="Protein" massUnit="g" consumedQuantity={31} targetQuantity={100} fillColor="yellowgreen" />
            <NutrientBar nutrientName="Carbohydrates" massUnit="g" consumedQuantity={32} targetQuantity={100} fillColor="steelblue" />
            <NutrientBar nutrientName="Fat" massUnit="g" consumedQuantity={33} targetQuantity={100} fillColor="red">
                <NutrientBar nutrientName="Omega 3" massUnit="g" consumedQuantity={4} targetQuantity={10} fillColor="red">
                    <NutrientBar nutrientName="ALA" massUnit="mg" consumedQuantity={250} targetQuantity={500} fillColor="orange" />
                    <NutrientBar nutrientName="DHA" massUnit="mg" consumedQuantity={50} targetQuantity={500} fillColor="orange" />
                    <NutrientBar nutrientName="EPA" massUnit="mg" consumedQuantity={150} targetQuantity={500} fillColor="orange" />
                </NutrientBar>
                <NutrientBar nutrientName="Omega 6" massUnit="g" consumedQuantity={5} targetQuantity={10} fillColor="red" />
                <NutrientBar nutrientName="Omega 9" massUnit="g" consumedQuantity={9} targetQuantity={10} fillColor="red" />
            </NutrientBar>
        </ul>
    </section>
    );
export default Balance;