import React, { Component } from 'react';
import classes from './FinishOrderStatus.css';
import {Container} from 'reactstrap';
import axios from '../../axios-orders';

const STATUS = [
    { id: 1, status: 'NOT_PAID'},
    { id: 2, status: 'PAID'},
    { id: 3, status: 'PENDING'},
    { id: 4, status: 'READY'},
    { id: 5, status: 'DELIVERED'}
];

const PAYMANT_STATUS = [
    { id: 1, status: 'PENDING'},
    { id: 2, status: 'COMPLETED'},
    { id: 3, status: 'CANCELED'},
    { id: 4, status: 'REJECTED'}
];


class FinishOrderStatus extends Component {
    constructor(props) {
        super(props);
        let id = localStorage.getItem('payOrderId');
        this.state = {
            orderId: id,
            orderNumber: null,
            status: null,
            paymentStatus: null
        };
        this.fetchDataFromServer();
    }

    componentDidMount() {
        sessionStorage.removeItem('actualIngredients');
        sessionStorage.removeItem('actualDrinks');
        setInterval(this.fetchDataFromServer, 10000);
    }

    fetchDataFromServer = () => {
        axios.get('/order/' + this.state.orderId + '/status/')
            .then(res => {
                let order_number = res.data.order_number;
                let status = res.data.status;
                let paymentStatus = res.data.payment_status;
                this.setState({ orderNumber: order_number,
                    status: status,
                    paymentStatus: paymentStatus});
        });
    };

    render() { 

        return (
            <section className={classes.FinishOrder}>
                <Container>
                    <div className={classes.FinishOrderContent}>
                        <h4>Order information: </h4>
                        <ul>
                            <li>
                                Order № : {
                                    this.state.orderNumber
                                }
                            </li>
                            <li>
                                Payment status : {
                                    PAYMANT_STATUS.map(status => {
                                        if(status.id === this.state.paymentStatus) {
                                            return status.status;
                                        }
                                    })
                                }
                            </li>
                            <li>
                                Order status : {
                                    STATUS.map(status => {
                                        if(status.id === this.state.status) {
                                            return status.status;
                                        }
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
         );
    }
}
 
export default FinishOrderStatus;
