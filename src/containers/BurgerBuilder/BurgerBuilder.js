import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { Row, Col, Button } from 'reactstrap';
import classes from './BurgerBuilder.css';
import PriceSection from '../../components/PriceSection/PriceSection';
import DrinkControls from '../../components/Burger/DrinkControls/DrinkControls';

const INGREDIENT_PRICES = {
    salad: 0.7,
    meat: 1.5,
    cheese: 0.8,
    bacon: 0.9,
    egg: 0.5,
    tomato: 0.4
};

const DRINK_PRICES = {
    pepsi: 4,
    coca_cola: 4,
    green_tea: 5,
    ice_tea: 4,
    coffee: 5,
    tomato_juice: 4
};

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            totalPrice: 5,
            drinks: [],
            actualIngredients: []
        };
      }

    addIngredientHandler = (type) => {
        const newIngredient = type;
        const priceAdditional = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdditional;
        this.setState({totalPrice: newPrice, 
                       ingredients: [...this.state.ingredients, newIngredient]});
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = [...this.state.ingredients];

        if(updatedIngredients.indexOf(type) !== -1) {
            updatedIngredients.splice(updatedIngredients.lastIndexOf(type), 1);
        } else {
            return false;
        }
        
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        if(oldPrice <= 5) {
            return;
        }
        
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice,
                       ingredients: updatedIngredients});
    }

    addDrinkHandler = (type) => {
        const newDrink = type;
        const priceAdditional = DRINK_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdditional;
        this.setState({totalPrice: newPrice, 
                       drinks: [...this.state.drinks, newDrink]});
    }

    removeDrinkHandler = (type) => { 
        const updatedDrinks = [...this.state.drinks];

        if(updatedDrinks.indexOf(type) !== -1) {
            updatedDrinks.splice(updatedDrinks.lastIndexOf(type), 1);
        } else {
            return false;
        }
        
        const priceDeduction = DRINK_PRICES[type];
        const oldPrice = this.state.totalPrice;
        if(oldPrice <= 5) {
            return;
        }
        
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice,
                       drinks: updatedDrinks});
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
        if (sessionStorage.getItem("actualIngredients") === null) {
            sessionStorage.setItem("actualIngredients", JSON.stringify(this.state.ingredients));
        }
        sessionStorage.setItem("actualDrinks", JSON.stringify(this.state.drinks));
        sessionStorage.setItem("totalPrice", JSON.stringify(this.state.totalPrice));
    }

    selectedInSessionOrderIngredientsHandler = (dataFromChild) => {
        const dataIng = dataFromChild;
        sessionStorage.setItem("actualIngredients", JSON.stringify(dataIng));
    }

    render() {
        return (
            <Auxiliary>
                <Row className={classes.Wrapper}>
                    <Col md="6" sm="6">
                        <Burger ingredients={this.state.ingredients} sessionItems={this.selectedInSessionOrderIngredientsHandler}/>
                    </Col>
                    <Col md="6" sm="6">
                        <div className={classes.BurgerBuilder}>
                                <h2>Ingredients</h2>
                                <BuildControls 
                                    ingredientAdded= {this.addIngredientHandler }
                                    ingredientRemoved= {this.removeIngredientHandler}
                                />
                                <h2>Drinks</h2>
                                <DrinkControls 
                                    drinkAdded= {this.addDrinkHandler}
                                    drinkRemoved= {this.removeDrinkHandler}
                                    drinks={this.state.drinks}
                                />
                                <Row>
                                    <Col md="6" sm="6">
                                        <PriceSection price={this.state.totalPrice}/>
                                    </Col>
                                    <Col md="6" sm="6">
                                        {
                                        (this.state.ingredients.length !== 0) ? <Button 
                                        color="primary"
                                        onClick={this.purchaseContinueHandler}>
                                         Make order
                                        </Button> : null
                                        }
                                    </Col>
                                </Row>
                        </div>
                    </Col>
                </Row>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;
