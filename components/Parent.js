import React, { Component } from 'react'
import MormalComponent from './MormalComponent'
import PureComponent from './PureComponent'

export default class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "React"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : "likith"
            })
        }, 2000);
    }
  render() {
    console.log("parent")
    return (

      <div>Parent
        <MormalComponent/>
        <PureComponent/>
        
        </div>
    )
  }
}
