import React, { Component } from "react"
LoadSelf () {
    
    fetch("http://localhost:8080/person")
    .then(r => r.json())
    .then(self => this.setState(self))
}

export default LoadSelf