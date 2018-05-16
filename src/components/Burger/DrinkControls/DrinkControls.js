import React, {Component} from 'react';
import DrinkControl from './DrinkControl/DrinkControl';
import classes from './DrinkControls.css';

class DrinkControls extends Component {
render() {
    const controls = this.props.drinkLabels;
        return (
            <div className={classes.DrinkControls + " row"}> 
                { 
                    controls.map(ctrl => (
                        <DrinkControl 
                            key={ctrl} 
                            added={() => this.props.drinkAdded(ctrl)}
                            removed={() => this.props.drinkRemoved(ctrl)}
                            drinks={this.props.drinks}
                            drinkType={ctrl}
                        />
                    )) 
                }
            </div>
        );
    }
}

export default DrinkControls;
