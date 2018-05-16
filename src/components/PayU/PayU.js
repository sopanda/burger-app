import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-payu';

class PayU extends Component {
    onSubmit = () => {
        
    };

    render() {
        return (
            <Auxiliary>
                <Button onClick={this.onSubmit} color="success" type="submit" formTarget="_blank">Pay with PayU</Button>
            </Auxiliary>
        );
    }
}
 
export default PayU;
