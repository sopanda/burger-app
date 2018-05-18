import React, { Component } from 'react';
import classes from './FinishOrderStatus.css';
import {Container} from 'reactstrap';

class FinishOrderStatus extends Component {
    state = {};

    componentDidMount() {
        sessionStorage.removeItem('actualIngredients');
        sessionStorage.removeItem('actualDrinks');
    }

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
 
export default FinishOrderStatus;
