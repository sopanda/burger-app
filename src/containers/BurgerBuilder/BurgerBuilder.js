import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { Row, Col } from 'reactstrap';
import classes from './BurgerBuilder.css';
import PriceSection from '../../components/PriceSection/PriceSection';
import OrderModal from '../../components/UI/Modal/OrderModal';

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
            drinks: []
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
                                        {
                                            (this.state.ingredients.length !== 0) ? <OrderModal 
                                                    buttonLabel="Make order" 
                                                    ingridients={this.state.ingredients}
                                                    price={this.state.totalPrice}/> : null
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
