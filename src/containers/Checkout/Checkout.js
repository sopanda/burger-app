import React, {Component} from 'react';
import CheckoutSummury from '../../components/Order/CheckoutSummury/CheckoutSummury';

class Checkout extends Component {
    
    constructor() {
        super();
        this.state = {
            ingredients: ["salad", "cheese", "meat"]
        };
    }
    

    render() {
        return(
            <div>
                <CheckoutSummury ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;
