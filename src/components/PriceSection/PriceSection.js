import React from 'react';
import classes from './PriceSection.css';

const PriceSection = (props) => (
    <div className={classes.PriceWrap}>
        Price: {props.price.toFixed(2)} $
    </div>
);

export default PriceSection;
