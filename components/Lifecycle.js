import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'elearn',
      }
      console.log("constructor is created");
    }
    static getDerivedStateFromProps(){
        console.log("this is the getDrivedStateFromProps ");
        return null;
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
  render() {
    
    console.log(" this from render");
    return (
      <div><h1>Lifecycle-
        {this.state.name}</h1>
      </div>
    )
  }
}
