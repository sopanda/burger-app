import React from 'react';
import classes from './BuildControl.css';
import { Button } from 'reactstrap';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <Button
            color="primary" 
            className={classes.More}
            onClick={props.added}
        >More</Button>
        <Button 
            color="danger"
            className={classes.Less}
            onClick={props.removed}
        >Less</Button>
    </div>
);

export default buildControl;
