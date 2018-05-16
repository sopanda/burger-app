import React from 'react';
import Burger from '../../Burger/Burger';
import {Button, Row, Col, Container} from 'reactstrap';
import classes from './CheckoutSummury.css';
import OrderSummury from '../../OrderSummury/OrderSummury';

const checkoutSummury = (props) => {
    return (
            <div className={classes.CheckoutSummury}>
                <Row>
                    <Col  md="6" sm="6">
                        <div className={classes.CheckoutBurger}>
                            <Burger ingredients={props.ingredients}/>
                        </div>
                    </Col>
                    <Col  md="6" sm="6">
                        <h3>Your final order: </h3>
                        <OrderSummury orderIngridients={props.ingredients} total={props.priceOrder} orderDrinks={props.drinks}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="success" onClick={props.onCheckoutContinued}>Pay</Button>
                        <Button color="danger" onClick={props.onCheckoutCancelled}>Cancel</Button>
                    </Col>
                </Row>
            </div>
    );
}

export default checkoutSummury;
