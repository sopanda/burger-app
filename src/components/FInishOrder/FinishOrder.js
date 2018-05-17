import React, { Component } from 'react';
import classes from './FinishOrder.css';
import {Container} from 'reactstrap';

class FinishOrder extends Component {
    state = {};

    render() { 
        return (
            <section className={classes.FinishOrder}>
                <Container>
                    <div className={classes.FinishOrderContent}>
                        <h4>Hello from order status component</h4>
                    </div>
                </Container>
            </section>
         );
    }
}
 
export default FinishOrder;
