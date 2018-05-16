import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import SortableItem from './SortableItem';
import classes from '../components/Burger/Burger.css';

const sortableList = SortableContainer(({items, disableSort}) => {
    let transformedIngredients;
    
    if(disableSort === null || disableSort === undefined) {
            transformedIngredients = items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} i={index} value={value}/>
      ));
    } else {
        transformedIngredients = items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} i={index} value={value} disabled={true}/>
      ));
    }
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    return (
        <ul className={classes.List}>
            {transformedIngredients}
        </ul>
    );
});

export default sortableList;
