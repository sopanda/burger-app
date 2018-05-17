import React from 'react';
import classes from './PriceSection.css';

const PriceSection = (props) => (
    <div className={classes.PriceWrap}>
        Price: <span className={classes.PriceTotal}>{props.price.toFixed(2)} zł </span>
    </div>
);

export default PriceSection;
