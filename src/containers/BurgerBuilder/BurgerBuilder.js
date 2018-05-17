import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { Row, Col, Button } from 'reactstrap';
import classes from './BurgerBuilder.css';
import PriceSection from '../../components/PriceSection/PriceSection';
import DrinkControls from '../../components/Burger/DrinkControls/DrinkControls';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            totalPrice: 3.0,
            drinks: [],
            actualIngredients: [],
            drinksServer: [],
            ingredientsServer: [],
            drinksLabels: [],
            ingsLabels: []
        };
      }

    componentDidMount() {
        axios.get('/menu/drinks/')
        .then(res => {
          let drinksServer = res.data.map(drink => ({id:drink.id, name: drink.name, price:drink.price}));
          let drinksLabels = res.data.map(drink => (drink.name));
          this.setState({drinksServer : drinksServer, drinksLabels : drinksLabels});
        });

        axios.get('/menu/ingredients/')
        .then(res => {
          let ingredientsServer = res.data.map(ing => ({id:ing.id, name: ing.name, price:ing.price}));
          let ingsLabels = res.data.map(ing => (ing.name));
          this.setState({ ingredientsServer: ingredientsServer, ingsLabels : ingsLabels});
        });
    }

    addIngredientHandler = (type) => {
        const newIngredient = type;
        const ingredients = this.state.ingredientsServer;
        let priceAdditional = 0;
        for (let i = 0; i < ingredients.length; i++) {
            let object = ingredients[i];
            if(object.name === type) {
                priceAdditional = +object.price;
            }
        }
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
        
        const ingredients = this.state.ingredientsServer;
        
        let priceDeduction = 0;
        for (let i = 0; i < ingredients.length; i++) {
            let object = ingredients[i];
            if(object.name === type) {
                priceDeduction = +object.price;
            }
        }

        const oldPrice = this.state.totalPrice;
        if(oldPrice <= 3) {
            return;
        }
        
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice,
                       ingredients: updatedIngredients});
    }

    addDrinkHandler = (type) => {
        const newDrink = type;
        const drinks = this.state.drinksServer;
        console.log(type);
        let priceAdditional = 0;
        for (let i = 0; i < drinks.length; i++) {
            let object = drinks[i];
            if(object.name === type) {
                priceAdditional = +object.price;
            }
        }
        console.log(priceAdditional);
        const oldPrice = this.state.totalPrice;
        console.log(oldPrice);
        const newPrice = oldPrice + priceAdditional;
        console.log(newPrice);
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
        
        const drinks = this.state.drinksServer;
 
        let priceDeduction = 0;
        for (let i = 0; i < drinks.length; i++) {
            let object = drinks[i];
            if(object.name === type) {
                    priceDeduction = +object.price;
            }
        }

        const oldPrice = this.state.totalPrice;

        if(oldPrice <= 3) {
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
                <section className={classes.SectionBuilder}>
                            <div className={classes.BuilderContent + " container"}>
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
                                                    ingLabels={this.state.ingsLabels}
                                                />
                                                <h2>Drinks</h2>
                                                <DrinkControls 
                                                    drinkAdded= {this.addDrinkHandler}
                                                    drinkRemoved= {this.removeDrinkHandler}
                                                    drinks={this.state.drinks}
                                                    drinkLabels={this.state.drinksLabels}
                                                />
                                                <Row className={classes.PriceOrderMakeSection}>
                                                    <Col md="6" sm="6">
                                                        <PriceSection price={this.state.totalPrice}/>
                                                    </Col>
                                                    <Col md="6" sm="6" className={classes.MakeOrderBtnWrap}>
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
                        </div>
                </section>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;
