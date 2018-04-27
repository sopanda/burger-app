import React, { Component  } from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
import {SortableContainer, arrayMove, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value, i}) => {
    return(    
        <li className={classes.ListItem}>
            <BurgerIngredient key={value + i} type={value}/>
        </li> 
    )});

const SortableList = SortableContainer(({items}) => {
    let transformedIngredients = items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} i={index} value={value} />
      ));
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <ul className={classes.List}>
            {transformedIngredients}
        </ul>
    );
});

class Burger extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            items: [...this.props.ingredients]
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.ingredients !== this.state.items) {
            this.setState({ items: nextProps.ingredients });
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
