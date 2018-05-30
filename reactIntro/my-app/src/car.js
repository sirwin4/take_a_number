import React, { Component } from 'react';
import "./Car.css"

class ACar extends Component {
    render() {
        return (
            <div className="App-car">
                <h2>Favorite Car</h2>
                <p>Make: {this.props.car.make}</p>
                <p>Model: {this.props.car.model}</p>
                <p>Year: {this.props.car.year}</p>
            </div>
        )
    }
}


export default ACar