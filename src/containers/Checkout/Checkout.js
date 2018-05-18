import React, {Component} from 'react';
import CheckoutSummury from '../../components/Order/CheckoutSummury/CheckoutSummury';
import classes from './Checkout.css';
import axios from '../../axios-orders';
import { withRouter } from "react-router-dom";

class Checkout extends Component {
    
    /* 
    TODO:
        *order form component
        *geolocation - done
        *destruction for http request const {app} = this.props
    */
   
    constructor() {
        super();
        this.state = {
            ingredients: [],
            drinks: [],
            price: 0,
            drinksServer: [],
            ingredientsServer: []
        };
    }
    
    componentDidMount() {
        axios.get('/menu/drinks/')
        .then(res => {
          let drinksServer = res.data.map(drink => ({id:drink.id, name: drink.name, price:drink.price}));
          this.setState({drinksServer : drinksServer});
        });

        axios.get('/menu/ingredients/')
        .then(res => {
          let ingredientsServer = res.data.map(ing => ({id:ing.id, name: ing.name, price:ing.price}));
          this.setState({ ingredientsServer: ingredientsServer});
        });

        let receivedOrderIngs = sessionStorage.getItem("actualIngredients");
        let orderIngs = JSON.parse(receivedOrderIngs);
        let receivedOrderDrinks = sessionStorage.getItem("actualDrinks");
        let orderDrinks = JSON.parse(receivedOrderDrinks);
        let receivedPrice = sessionStorage.getItem("totalPrice");
        let orderTotal = JSON.parse(receivedPrice);
        this.setState({ ingredients: orderIngs, drinks: orderDrinks, price: orderTotal });
    }
    
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
        sessionStorage.clear(); // ne bag, a ficha
    }

    checkoutContinueHandler = () => {
        const restaurant = JSON.parse(sessionStorage.getItem('userRestaurant'));

        const ingrs = this.state.ingredientsServer;
        const ingrsFromCheck = this.state.ingredients;
        const ingrsToCheck = [];
        for (let i = 0; i < ingrsFromCheck.length; i++) {
            for (let j = 0; j < ingrs.length; j++) {
                    if(ingrsFromCheck[i] === ingrs[j].name) {
                        ingrsToCheck.push({ingredient: ingrs[j].id});
                    }
                    continue;
                }
        }

        const drinksFromCheck = this.state.drinks;
        const drinksCount = drinksFromCheck.reduce((b,c) => (
            (b[b.findIndex(d=>d.drink===c)] || b[b.push({drink:c,quantity:0})-1]).quantity++,b
        ),[]); // counting duplicates and creating array of objects

        const drinks = this.state.drinksServer;
        
        const drinksToCheck = [];

        for (let i = 0; i < drinksCount.length; i++) {
            for (let j = 0; j < drinks.length; j++) {
                    if(drinksCount[i].drink === drinks[j].name) {
                        drinksToCheck.push({drink: drinks[j].id, quantity: drinksCount[i].quantity});
                    }
                    continue;
                }
        }

        const order = {
            ingredients: [...ingrsToCheck],
            restaurant: restaurant.value,
            drinks: [...drinksToCheck]
        };

        axios.post('/order/', order)
            .then(function(response) {
                console.log(response);
                const payOrderId = response.data.order;
                localStorage.setItem('payOrderId', payOrderId);
                window.location.href = response.data.redirect_uri;
            })
            .catch(function (error) {
                console.log(error);
        });
      
        console.log(order);
    }

    render() {
        return(
            <section className={classes.Checkout}>
                    <div className={classes.CheckoutContent}>
                        <CheckoutSummury 
                            ingredients={this.state.ingredients} 
                            drinks={this.state.drinks}
                            priceOrder={this.state.price}
                            onCheckoutContinued={this.checkoutContinueHandler}
                            onCheckoutCancelled={this.checkoutCancelledHandler}
                        />
                    </div>
            </section>
        );
    }
}

export default withRouter(Checkout);
