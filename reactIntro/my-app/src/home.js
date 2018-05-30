import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {
  render() {
    return (
        <div className=".App-home">
            <p>Address: {this.address}</p>
        </div>
    )
  }
}

export default Home;