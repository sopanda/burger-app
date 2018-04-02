import React from 'react';
import classes from './PriceSection.css';

const PriceSection = (props) => (
    <div className={classes.PriceWrap}>
        Current total price: {props.price.toFixed(2)} $
    </div>
);

export default PriceSection;
