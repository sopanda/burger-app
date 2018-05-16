import React from 'react';
import classes from './DrinkControl.css';

const drinkControl = (props) => {
    const drinks = props.drinks.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    const drinkCount = drinks[props.drinkType];

    return(
        <div className={classes.DrinkControl + " col"}>
            <a  className={classes.More}
                onClick={props.added}
            ><i className="fas fa-plus"></i></a>
            <div className={classes.Label}>
                {props.drinkType} {(drinkCount !== 0) ? drinkCount : " "}
            </div>
            <a  className={classes.Less}
                onClick={props.removed}
            ><i className="fas fa-minus"></i></a>
        </div>
    );
}

export default drinkControl;
