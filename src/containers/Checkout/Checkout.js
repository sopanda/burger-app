import React, {Component} from 'react';
import CheckoutSummury from '../../components/Order/CheckoutSummury/CheckoutSummury';

class Checkout extends Component {
    
    /* 
    TODO:
        *take ingredients from Burger in needed order
        *order form component
        *drinks state from params
    */
   
    constructor() {
        super();
        this.state = {
            ingredients: [],
            drinks: []
        };
    }
    
    componentDidMount() {
        let receivedOrderIngs = sessionStorage.getItem("actualIngredients");
        let orderIngs = JSON.parse(receivedOrderIngs);
        this.setState({ ingredients: orderIngs });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace("/checkout/finish-order");
    }

    render() {
        return(
            <div>
                <CheckoutSummury 
                    ingredients={this.state.ingredients} 
                    onCheckoutContinued={this.checkoutContinueHandler}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                />
            </div>
        );
    }
}

export default Checkout;
