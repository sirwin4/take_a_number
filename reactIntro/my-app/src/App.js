import React, { Component } from 'react';
import "./App.css"

class Me extends Component {
  state = {
    infoId: "",
    firstName: "",
    lastName: "",
    address: "",
    carId: "",
    car: {}
  }



  componentDidMount() {
    fetch("http://localhost:8088/people/1")
      .then(response => response.json())
      .then(kitty => this.setState(kitty))
        let promises = []
        promises.push(fetch(`http://localhost:8088/cars/${this.state.carId}`)
        .then(response => response.json())
        .then(kitty => this.setState(kitty))
      )
     
      promises.push(fetch(`http://localhost:8088/infos/${this.state.infoId}`)
        .then(response => response.json())
        .then(kitty => this.setState(kitty))
      )
      Promise.all(promises)
  }
  render() {
    return (
      <article>
        <div>
          <h2>{this.state.firstName} {this.state.lastName}</h2>
          <h2>{this.state.address}</h2>
        </div>
        <div className="App-car">
          <h2>Favorite Car</h2>
          <p>Make: {this.state.car.make}</p>
          <p>Model: {this.state.car.model}</p>
          <p>Year: {this.state.car.year}</p>
        </div>
      </article>
    )
  }
}


export default Me;
