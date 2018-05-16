import React, {Component} from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

class BuildControls extends Component {
    render() {
    const controls = this.props.ingLabels;
            return (
            <div className={classes.BuildControls + " row"}> 
                { 
                    controls.map(ctrl => (
                        <BuildControl 
                            key={ctrl} 
                            label={ctrl} 
                            added={() => this.props.ingredientAdded(ctrl)}
                            removed={() => this.props.ingredientRemoved(ctrl)}
                        />
                    )) 
                }
            </div>
        );
    }
}

export default BuildControls;
