import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { Row, Col, Button } from 'reactstrap';
import classes from './BurgerBuilder.css';
import PriceSection from '../../components/PriceSection/PriceSection';
// import OrderSum from '../../components/OrderSum/OrderSum';

const INGREDIENT_PRICES = {
    salad: 0.7,
    meat: 1.5,
    cheese: 0.8,
    bacon: 0.9
};

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            totalPrice: 5
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
                       ingredients: updatedIngredients})
    }

    render() {
        return (
            <Auxiliary>
                <Row className={classes.Wrapper}>
                    <Col md="6" sm="6">
                        <Burger ingredients={this.state.ingredients}/>
                    </Col>
                    <Col md="6" sm="6">
                        <div className={classes.BurgerBuilder}>
                                <h2>Ingredients</h2>
                                <BuildControls 
                                    ingredientAdded= {this.addIngredientHandler }
                                    ingredientRemoved= {this.removeIngredientHandler}
                                />
                                <h2>Drinks</h2>
                                <p>Here will be list of drinks</p>
                                <Row>
                                    <Col md="6" sm="6">
                                        <PriceSection price={this.state.totalPrice}/>
                                    </Col>
                                    <Col md="6" sm="6">
                                        <Button>Make order</Button>
                                    </Col>
                                </Row>
                                {/*
                                    <Row>
                                        <OrderSum ingridients={this.state.ingredients}/>
                                    </Row>
                                */}
                        </div>
                    </Col>
                </Row>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;
