import React, { Component } from 'react';
import {Button} from 'reactstrap';
import RestaurantSelect from '../../components/RestaurantSelect/RestaurantSelect';
import classes from './Home.css';
import {Container} from 'reactstrap';

class Home extends Component {
    state = {};

    burgerBuilderPageRoute = () => {
        this.props.history.push('/burger-builder');
    };

    render() { 
        return (
            <div className={classes.Home}>
                    <section className={classes.Hero}>
                        <Container>
                            <div className={classes.HeroContent}>
                                <h1>We do it like you’d do it</h1>
                                <RestaurantSelect/>                                
                                <Button 
                                        color="primary"
                                        onClick={this.burgerBuilderPageRoute}>
                                        Make order
                                </Button>
                            </div>
                        </Container>
                    </section>
            </div>
         );
    }
}
 
export default Home;
