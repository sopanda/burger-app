import React from 'react';
import Burger from '../../Burger/Burger';
import {Button} from 'reactstrap';
import classes from './CheckoutSummury.css';


const checkoutSummury = (props) => {
    return (
        <div className={classes.CheckoutSummury}>
            <h2>Your order: </h2>
            
            <Burger ingredients={props.ingredients}/>
            
            <Button color="success" onClick={props.onCheckoutContinued}>Continue</Button>
            <Button color="danger" onClick={props.onCheckoutCancelled}>Cancel</Button>
        </div>
    );
}

export default checkoutSummury;
