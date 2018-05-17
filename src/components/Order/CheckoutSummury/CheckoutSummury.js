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
                    <Col  md="6" sm="12">
                        <div className={classes.CheckoutBurger}>
                            <Burger ingredients={this.props.ingredients} disableSorting={disable}/>
                        </div>
                    </Col>
                    <Col  md="6" sm="12">
                        <h3>Your final order: </h3>
                        <ol className={classes.List}>
                            {orderSummury}
                        </ol>
                     <PriceSection price={this.props.priceOrder}/>
                     <div className={classes.BtnGroup}>
                        <Button color="success" className={classes.Pay} onClick={this.props.onCheckoutContinued}>Accept and Pay via PayU</Button>
                        <Button color="danger" className={classes.Cancel} onClick={this.props.onCheckoutCancelled}>Cancel</Button>
                     </div>
                    </Col>
                </Row>
            </div>
    );
}
}

export default CheckoutSummury;
