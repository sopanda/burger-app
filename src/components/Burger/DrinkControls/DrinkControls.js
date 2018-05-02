import React from 'react';
import DrinkControl from './DrinkControl/DrinkControl';
import classes from './DrinkControls.css';

const controls = [
    { label: 'Coca-cola', type: 'coca_cola'},
    { label: 'Pepsi', type: 'pepsi'},
    { label: 'Green tea', type: 'green_tea'},
    { label: 'Ice tea', type: 'ice_tea'},
    { label: 'Coffee', type: 'coffee'},
    { label: 'Tomato juice', type: 'tomato_juice'}
];

const drinkControls = (props) => (
    <div className={classes.DrinkControls}> 
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
