import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
import {SortableContainer, arrayMove, SortableElement} from 'react-sortable-hoc';
import Auxiliary from '../../hoc/Auxiliary';

const SortableItem = SortableElement(({value, index}) => <BurgerIngredient key={value + index} type={value} />);

const SortableList = SortableContainer(({items}) => {
    if (items.length === 0) {
        items = <p>Please start adding ingredients!</p>
    }
    return (
      <Auxiliary>
        {
            items
        }
    </Auxiliary>
    );
});
  

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) // this means, that extracts a keys and turns into array
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <SortableItem key={igKey + i} index={i} value={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []); // transforming Object into an Array

    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type = "bread-top"/>

            <SortableList items={transformedIngredients} />

            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
};

export default burger;
