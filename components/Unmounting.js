import React, { Component } from 'react'
import Student from './Student';

export default class Unmounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         display: true
      }
    }
    changeData=()=>{
        this.setState({display : false})
    }
   
  render() {
    let msg;
   if(this.state.display){
    msg=<Student/>
   }
   else{
    msg="";
   }
   return (
    <div>
    <h1> {msg}</h1>
    <button onClick={this.changeData}>
    delete
    </button>
    </div>
   );
}
}


