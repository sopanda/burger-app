import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const orderSum = (props) => {
    const order = props.ingridients.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});

    const orderSummury = Object.keys(order).map((key, i) => 
        <li key={i}>{key} : {order[key]}</li>
    )

    return (
        <Auxiliary>
            <h4>Your order:</h4>
             <ul>
                {orderSummury}
             </ul>
        </Auxiliary>
    );
};

export default orderSum;
