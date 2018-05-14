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
        const queryIngredients = this.props.location.search
            .split("&&")[0]
            .replace(/&/g, ",")
            .substr(13)
            .split(",");
        this.setState({ ingredients: queryIngredients });
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
