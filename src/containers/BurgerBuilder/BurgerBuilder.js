import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import classes from './BurgerBuilder.css';
import PriceSection from '../../components/PriceSection/PriceSection';

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
            totalPrice: 5,
            activeTab: '1'
        };
        this.toggle = this.toggle.bind(this);
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }

    addIngredientHandler = (type) => {
        const newIngredient = type;
        const priceAdditional = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdditional;
        this.setState({totalPrice: newPrice, ingredients: [...this.state.ingredients, newIngredient] })
        console.log(this.state.ingredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        } // {salad: true, meat: false and etc.}

        return (
            <Auxiliary>
                <Row>
                    <Col md="2" sm="2">
                        <PriceSection price={this.state.totalPrice}/>
                    </Col>
                    <Col md="6" sm="6">
                        <Burger ingredients={this.state.ingredients}/>
                    </Col>
                    <Col md="4" sm="4">
                        <div className={classes.BurgerBuilder}>
                            <Nav tabs>
                                <NavItem className={classes.NavItem}>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' }) + " " + classes.TabLink}
                                    onClick={() => { this.toggle('1'); }}
                                    >
                                    Ingredients
                                    </NavLink>
                                </NavItem>
                                <NavItem className={classes.NavItem}>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' }) + " " + classes.TabLink}
                                    onClick={() => { this.toggle('2'); }}
                                    >
                                    Drinks
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1" className={classes.TabPane}>
                                    <Row>
                                        <Col md="12" sm="12">
                                            <BuildControls 
                                                ingredientAdded= {this.addIngredientHandler }
                                                ingredientRemoved= {this.removeIngredientHandler}
                                                disabled={disabledInfo}
                                            />
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2" className={classes.TabPane}>
                                    <Row>
                                        <Col md="12" sm="12">
                                            <p>Here will be list of drinks</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                </Row>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;
