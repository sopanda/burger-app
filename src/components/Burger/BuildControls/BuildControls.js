import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'Salad'},
    { label: 'Bacon', type: 'Bacon'},
    { label: 'Tomato', type: 'Tomato'},
    { label: 'Fried egg', type: 'Fried egg'},
    { label: 'Cheese', type: 'Cheese'},
    { label: 'Meat', type: 'Meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls + " row"}> 
        { 
            controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                 />
            )) 
        }
    </div>
);

export default buildControls;
