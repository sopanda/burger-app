import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import OrderSummury from '../../OrderSummury/OrderSummury';

class OrderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Please, check your order</ModalHeader>
          <ModalBody>
              <OrderSummury orderIngridients={this.props.ingridients} 
                            total={this.props.price}
                            orderDrinks={this.props.drinks}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.purchaseContinued}>Pay</Button>
            {' '}
            <Button color="secondary" onClick={this.props.purchaseCancelled}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default OrderModal;
