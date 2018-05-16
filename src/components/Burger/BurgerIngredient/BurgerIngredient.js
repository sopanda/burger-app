import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ( 'Meat' ):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ( 'Cheese' ):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ( 'Egg' ):
                ingredient = (
                    <div className={classes.Egg}>
                        <div className={classes.Yellow}></div>
                    </div>
                );
                break;
            case ( 'Bacon' ):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ( 'Tomato' ):
                ingredient = <div className={classes.Tomato}></div>;
                break;
            case ( 'Salad' ):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;   
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
