import React, { Component } from 'react';
import Geolocation from "react-geolocation";

export default class GeoLocation extends Component {

    handlePosition = (position) => {
        const { latitude, longitude } = position.coords;
        this.props.restaurantCoords(latitude, longitude);
    };

    render() {
    return (
        <Geolocation
            onSuccess={this.handlePosition}
        />
    );
    }
};
