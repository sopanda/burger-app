import React, {Component} from 'react';
import Select from 'react-select';
import axios from '../../axios-orders';
import GeoLocation from '../GeoLocation/GeoLocation';

class RestaurantSelect extends Component {
  state = {
    restaurants: null,
    restaurant: '',
    userLocation: {}
  }

  coordsHandler = (latitude, longitude) => {
    this.setState({userLocation: {latitude: latitude, longitude: longitude}});
    axios.get("/restaurants/" + latitude + "/" + longitude + "/")
        .then(response => {
            console.log(response);
    })
      .catch(error => {
            console.log(error);
      });
  }

  handleChange = (selectedOption) => {
    this.setState({ restaurant: selectedOption });
  }
  
  componentDidMount() {
    axios.get('/restaurants/list/')
        .then(response => {
            let options = response.data.map(category => ({ value: category.id, label: category.name }));
            this.setState({restaurants: options})
    });
}

  render() {
  	const { restaurant } = this.state;
    return (
      <div>
        <Select
            name="form-field-name"
            value={restaurant}
            onChange={this.handleChange}
            options={this.state.restaurants}
        />
        <GeoLocation restaurantCoords={this.coordsHandler}/>
      </div>
    );
  }
}

export default RestaurantSelect;
