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
        render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
        }) =>
            <div>
                <h5>Your position: </h5>
                <ul>
                    <ol>latitude: {latitude} </ol>
                    <ol>longitude: {longitude} </ol>
                </ul>
            </div>}
        />
    );
    }
};
