import React from 'react';
import DrinkControl from './DrinkControl/DrinkControl';
import classes from './DrinkControls.css';

const controls = [
    { label: 'Coca-cola', type: 'Coca-cola'},
    { label: 'Pepsi', type: 'Pepsi'},
    { label: 'Green tea', type: 'Green tea'},
    { label: 'Ice tea', type: 'Ice tea'},
    { label: 'Coffee', type: 'Coffee'},
    { label: 'Tomato juice', type: 'Tomato juice'}
];

const drinkControls = (props) => (
    <div className={classes.DrinkControls + " row"}> 
        { 
            controls.map(ctrl => (
                <DrinkControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.drinkAdded(ctrl.type)}
                    removed={() => props.drinkRemoved(ctrl.type)}
                    drinks={props.drinks}
                    drinkType={ctrl.type}
                 />
            )) 
        }
    </div>
);

export default drinkControls;
