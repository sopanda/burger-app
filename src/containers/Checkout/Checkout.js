import React, {Component} from 'react';
import CheckoutSummury from '../../components/Order/CheckoutSummury/CheckoutSummury';

class Checkout extends Component {
    
    /* 
    TODO:
        *order form component
        *geolocation
    */
   
    constructor() {
        super();
        this.state = {
            ingredients: [],
            drinks: [],
            price: 0
        };
    }
    
    componentDidMount() {
        let receivedOrderIngs = sessionStorage.getItem("actualIngredients");
        let orderIngs = JSON.parse(receivedOrderIngs);
        let receivedOrderDrinks = sessionStorage.getItem("actualDrinks");
        let orderDrinks = JSON.parse(receivedOrderDrinks);
        let receivedPrice = sessionStorage.getItem("totalPrice");
        let orderTotal = JSON.parse(receivedPrice);
        this.setState({ ingredients: orderIngs, drinks: orderDrinks, price: orderTotal });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
        sessionStorage.clear(); // ne bag, a ficha
    }

    checkoutContinueHandler = () => {
        this.props.history.replace("/checkout/finish-order");
    }

    render() {
        return(
                <CheckoutSummury 
                    ingredients={this.state.ingredients} 
                    drinks={this.state.drinks}
                    priceOrder={this.state.price}
                    onCheckoutContinued={this.checkoutContinueHandler}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                />
        );
    }
}

export default Checkout;
