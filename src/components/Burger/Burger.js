import React, { Component  } from 'react';
import classes from './Burger.css';
import {arrayMove} from 'react-sortable-hoc';
import SortableList from '../../hoc/SortableList';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import Checkout from '../../containers/Checkout/Checkout';

class Burger extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            items: [...this.props.ingredients]
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.ingredients !== this.state.items) {
            this.setState({ items: nextProps.ingredients});
          }
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    }

    render() {
        return (
                <div className={classes.Burger}>
                    <BurgerIngredient type = "bread-top"/>
                        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} lockAxis="y"/>
                    <BurgerIngredient type = "bread-bottom"/>
                </div>
            );
        };
    }

export default Burger;
