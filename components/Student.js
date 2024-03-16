import React, { Component } from 'react'

export default class Student extends Component {
    componentWillUnmount(){
        alert("data deleted");
    }
  render() {
    return (
      <div>
        <h1>
            welcome to college, im here the student.
        </h1>
      </div>
    )
  }
}