import React from 'react';
import Burger from '../../Burger/Burger';
import {Button, Row, Col} from 'reactstrap';
import classes from './CheckoutSummury.css';
import OrderSummury from '../../OrderSummury/OrderSummury';

const checkoutSummury = (props) => {
    return (
        <div className={classes.CheckoutSummury}>
            <Row>
                <Col>
                    <div className={classes.CheckoutBurger}>
                        <Burger ingredients={props.ingredients}/>
                    </div>
                </Col>
                <Col>
                    <h3>Your final order: </h3>
                    <OrderSummury orderIngridients={props.ingredients} total={props.priceOrder} orderDrinks={props.drinks}/>
                </Col>
            </Row>
            <Button color="success" onClick={props.onCheckoutContinued}>Continue</Button>
            <Button color="danger" onClick={props.onCheckoutCancelled}>Cancel</Button>
        </div>
    );
}

export default checkoutSummury;
