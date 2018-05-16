import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import PriceSection from '../PriceSection/PriceSection';

class OrderSummury extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.orderIngridients !== this.props.orderIngridients || 
               nextProps.orderDrinks !== this.props.orderDrinks;
    }

    render() {
        let totalOrder = [...this.props.orderIngridients, ...this.props.orderDrinks];

        /* seaching for duplicates and creating object with founded values and their count */
        const order = totalOrder.reduce(function(prev, cur) {
            prev[cur] = (prev[cur] || 0) + 1;
            return prev;
          }, {});
    
        const orderSummury = Object.keys(order).map((key, i) => 
            <li key={i}>{key} : x{order[key]}</li>
        )
    return (
        <Auxiliary>
             <ul>
                {orderSummury}
             </ul>
             <PriceSection price={this.props.total}/>
        </Auxiliary>
    );
};
}

export default OrderSummury;
