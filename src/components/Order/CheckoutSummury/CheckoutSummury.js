import React, {Component} from 'react';
import Burger from '../../Burger/Burger';
import {Button, Row, Col} from 'reactstrap';
import classes from './CheckoutSummury.css';
import PriceSection from '../../PriceSection/PriceSection';

class CheckoutSummury extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.ingredients !== this.props.drinks || 
               nextProps.drinks !== this.props.drinks;
    }

    render() {
        let totalOrder = [...this.props.ingredients, ...this.props.drinks];

        /* seaching for duplicates and creating object with founded values and their count */
        const order = totalOrder.reduce(function(prev, cur) {
            prev[cur] = (prev[cur] || 0) + 1;
            return prev;
          }, {});
    
        const orderSummury = Object.keys(order).map((key, i) => 
            <li key={i}>{key} : x{order[key]}</li>
        );

        let disable = "true";
    return (
            <div className={classes.CheckoutSummury}>
                <Row>
                    <Col  md="6" sm="6">
                        <div className={classes.CheckoutBurger}>
                            <Burger ingredients={this.props.ingredients} disableSorting={disable}/>
                        </div>
                    </Col>
                    <Col  md="6" sm="6">
                        <h3>Your final order: </h3>
                        <ul>
                            {orderSummury}
                        </ul>
                     <PriceSection price={this.props.priceOrder}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="success" onClick={this.props.onCheckoutContinued}>Pay</Button>
                        <Button color="danger" onClick={this.props.onCheckoutCancelled}>Cancel</Button>
                    </Col>
                </Row>
            </div>
    );
}
}

export default CheckoutSummury;
