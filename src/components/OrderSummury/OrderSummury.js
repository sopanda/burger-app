import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import PriceSection from '../PriceSection/PriceSection';

const orderSummury = (props) => {
    /* seaching for duplicates and creating object with founded values and their count */
    const order = props.orderIngridients.reduce(function(prev, cur) {
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
             <PriceSection price={props.total}/>
        </Auxiliary>
    );
};

export default orderSummury;
