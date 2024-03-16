import React, { Component } from 'react'

export default class Updatelifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"elearn",
      }
     
    }
    static getDerivedStateFromProps(){
        console.log("this is the getDrivedStateFromProps ");
        return null;
    }
    shouldComponentUpdate(){
        console.log('should component update');
        return true ;
       

    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState.name);
        return null;

    }
    componentDidUpdate(){
        document.getElementById("newval").innerHTML="new value"+this.state.name;
    }
    changeData =() =>{
        this.setState({
            name:'hello',
        })
    }
  render() {
    console.log("from reender");
    return (
      <div>Updatelifecycle
        <h1>life sysle .{this.state.name}</h1>
<button onClick={this.changeData}>   real message</button>
<div id='newval'></div>
      </div>
    )
  }
}
