import React, {PureComponent } from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
import {SortableContainer, arrayMove, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value, index, i}) => <BurgerIngredient key={value + i} type={value} /> );

const SortableList = SortableContainer(({items}) => {
    let itemInd = 0;
    let transformedIngredients = Object.keys(items) // this means, that extracts a keys and turns into array
        .map((igKey) => {
            return [...Array(items[igKey])].map((_, i) => {
                itemInd++;
                return <SortableItem key={"item" + itemInd} index={itemInd} i={i} value={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []); // transforming Object into an Array
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return transformedIngredients;
});
  

class Burger extends PureComponent  {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidUpdate() {
        // this.setState({
        //     items: this.props.ingredients
        // });
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        // this.setState({
        //     items: arrayMove(this.state.items, oldIndex, newIndex)
        // });
    }

    render() {
        // console.log(this.state.items);
        return (
                <div className={classes.Burger}>
                    <BurgerIngredient type = "bread-top"/>

                    <SortableList items={this.props.ingredients} onSortEnd={this.onSortEnd}/>

                    <BurgerIngredient type = "bread-bottom"/>
                </div>
            );
        };
    }

export default Burger;
