import React, { Component } from 'react';
import {Button} from 'reactstrap';
import RestaurantSelect from '../../components/RestaurantSelect/RestaurantSelect';
import classes from './Home.css';
import {Container, FormGroup} from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super();
        this.handleRestaurant = this.handleRestaurant.bind(this);
    }

    burgerBuilderPageRoute = () => {
        this.props.history.push('/burger-builder');
    };

    handleRestaurant = (restaurant) => {
        const restaurantLocation = restaurant;
        sessionStorage.setItem('userRestaurant', JSON.stringify(restaurantLocation));
    }

    render() { 
        return (
            <div className={classes.Home}>
                    <section className={classes.Hero}>
                        <Container>
                            <div className={classes.HeroContent}>
                                    <h1>We do it like you’d do it</h1>
                                    <FormGroup className={classes.Form}>
                                        <RestaurantSelect restaurantHandle={this.handleRestaurant}/>                                
                                        <Button 
                                                color="primary"
                                                onClick={this.burgerBuilderPageRoute}
                                                className={classes.OrderBtn}>
                                                Make order
                                        </Button>
                                    </FormGroup>
                            </div>
                        </Container>
                    </section>
            </div>
         );
    }
}
 
export default Home;
