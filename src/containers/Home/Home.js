import React, { Component } from 'react';
import {Button} from 'reactstrap';
import GeoLocation from './GeoLocation/GeoLocation';

class Home extends Component {
    state = {};

    burgerBuilderPageRoute = () => {
        this.props.history.push('/burger-builder');
    };

    render() { 
        return ( 
            <div>
                <h2>hello from home</h2>
                <Button 
                        color="primary"
                        onClick={this.burgerBuilderPageRoute}>
                        Make order
                </Button>
                <GeoLocation />
            </div>
         );
    }
}
 
export default Home;
