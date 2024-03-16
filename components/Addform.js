import React, { Component } from 'react'
import './main.css'
import axios from 'axios';

export default class Addform extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id:"",
       name:"",
       address:"",
    };
  }
  changeHandler=(e)=>{
    this.setState
    ({[e.target.name]: e.target.value})

    
  }
  submitHandler=(e)=>{
    const{id,name,address}=this.state;
    e.preventDefault();
    //console.log(id,name,address)
    axios.post("http://localhost:4001/students",{id,name,address})
    .then((res)=>{
      document.getElementById('Note').innerHTML=("data is entered successful");
      this.setState({
       id:"",
        name:"",
        address:"",
    });
    })
    .catch((err)=>{
      document.getElementById('Note').innerHTML="data is unable to  enter"
    });
  }
  render() {
    const{id,name,address}=this.state;
    return (
      <div className='studentform  '>
        <form onSubmit={this.submitHandler}>
        <div>
        <input type='text' 
        name='id' 
        placeholder='Id'
        value={id}
        onChange={this.changeHandler}
        
        
        />
        </div>
        <div>
        <input type='text' name='name' placeholder='enter name'  value={name} onChange={this.changeHandler}/>
        </div>
        <div>
        <input type='text' name='address' placeholder='enter addreess' value={address} onChange={this.changeHandler}/>
        </div>
        <div>
        <input type='submit' name='submit' ></input>
        </div>
        
        </form>
        <div id='Note' >

        </div>
        </div>
    )
  }
}
