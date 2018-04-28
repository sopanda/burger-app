import {SortableElement} from 'react-sortable-hoc';
import BurgerIngredient from '../components/Burger/BurgerIngredient/BurgerIngredient';
import classes from '../components/Burger/Burger.css';
import React from 'react';

const sortableItem = SortableElement(({value, i}) => {
    return(    
        <li className={classes.ListItem}>
            <BurgerIngredient key={value + i} type={value}/>
        </li> 
)});

export default sortableItem;
