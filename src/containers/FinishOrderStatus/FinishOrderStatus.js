import React, { Component } from 'react';
import classes from './FinishOrderStatus.css';
import {Container} from 'reactstrap';

class FinishOrderStatus extends Component {
    state = {
        orderId: null
    };

    componentDidMount() {
        sessionStorage.removeItem('actualIngredients');
        sessionStorage.removeItem('actualDrinks');
        let id = localStorage.getItem('payOrderId');
        this.setState({ orderId: id });
    }

    render() { 
        return (
            <section className={classes.FinishOrder}>
                <Container>
                    <div className={classes.FinishOrderContent}>
                        <h4>Hello from order status component</h4>
                        {this.state.orderId}
                    </div>
                </Container>
            </section>
         );
    }
}
 
export default FinishOrderStatus;
