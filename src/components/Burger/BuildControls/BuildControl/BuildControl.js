import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl + " col"}>
        <a  className={classes.More}
            onClick={props.added}
        ><i className="fas fa-plus"></i></a>
        <div className={classes.Label}>{props.label}</div>
        <a  className={classes.Less}
            onClick={props.removed}
        ><i className="fas fa-minus"></i></a>
    </div>
);

export default buildControl;
