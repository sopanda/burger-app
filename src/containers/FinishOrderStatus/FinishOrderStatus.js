import React, { Component } from 'react';
import classes from './FinishOrderStatus.css';
import axios from '../../axios-orders';

const STATUS = [
    { id: 0, status: 'NOT PAID'},
    { id: 1, status: 'PAID'},
    { id: 2, status: 'PENDING'},
    { id: 3, status: 'READY'},
    { id: 4, status: 'DELIVERED'}
];

const PAYMANT_STATUS = [
    { id: 0, status: 'PENDING'},
    { id: 1, status: 'COMPLETED'},
    { id: 2, status: 'CANCELED'},
    { id: 3, status: 'REJECTED'}
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
        setInterval(this.fetchDataFromServer, 1000);
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
                    <div className={classes.FinishOrderContent}>
                        <h2>Order information: </h2>
                        <ul>
                            <li>
                                Order: <span className={classes.Data}> {
                                    this.state.orderNumber 
                                }</span>
                            </li>
                            <li>
                                Payment status : <span className={classes.Data}>  {
                                    PAYMANT_STATUS.map(status => {
                                        if(status.id === this.state.paymentStatus) {
                                            return status.status;
                                        }
                                        return true;
                                    })
                                } </span>
                            </li>
                            <li>
                                Order status : <span className={classes.Data}>  {
                                    STATUS.map(status => {
                                        if(status.id === this.state.status) {
                                            return status.status;
                                        }
                                        return true;
                                    })
                                } </span>
                            </li>
                        </ul>
                    </div>
            </section>
         );
    }
}
 
export default FinishOrderStatus;
