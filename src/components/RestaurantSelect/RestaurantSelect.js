import React, {Component} from 'react';
import Select from 'react-select';
import axios from '../../axios-orders';
import GeoLocation from '../GeoLocation/GeoLocation';
import Auxiliaty from '../../hoc/Auxiliary/Auxiliary';
import classes from './RestaurantSelect.css';
import styled from 'styled-components';

const SelectStyled = styled(Select)`
  & .Select-control {
    border-radius: 26px;
    border: none;
  }
  & .Select-placeholder {
    font-size: 13px;
    padding-top: 2px;
  }
  & .Select-value-label {
    color: #e25d3b !important;
    font-weight: 500;
    font-size: 17px;
  }
  & .Select-option {
    color: #e25d3b;
    font-size: 13px;
    height: 36px;
  }
  & .Select-clear, .Select-arrow {
    color: #e25d3b !important;
    border-color:  #e25d3b transparent transparent !important;
  }
`

class RestaurantSelect extends Component {
  state = {
    restaurants: null,
    restaurant: '',
  }

  coordsHandler = (latitude, longitude) => {
    axios.get("/restaurants/" + latitude + "/" + longitude + "/")
        .then(response => {
            console.log(response);
            const {id, name} = response.data;
            this.setState({ restaurant:  {value: id, label: name}});
    })
      .catch(error => {
          this.setState({ restaurant: null });
            // console.log(error);
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
      <Auxiliaty>
          <SelectStyled
              name="form-field-name"
              value={restaurant}
              onChange={this.handleChange}
              options={this.state.restaurants}
              placeholder= "Choose your burger store"
              className={classes.Select}
          />
          <GeoLocation restaurantCoords={this.coordsHandler}/>
      </Auxiliaty>
    );
  }
}

export default RestaurantSelect;
