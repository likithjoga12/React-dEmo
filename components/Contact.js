import React, { Component } from 'react'
import './main.css'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name :"",
       phone :'',
       email: '',
        subject :'',
    };
  }
  changeHandler=(e)=>{
    this.setState({[e.target.name]: e.target.value})

  }
  submitHandler =(e) =>{
    e.preventDefault();
    const{name,phone, email}=this.state
    let alpExp= /^[a-zA-Z]+$/;
    let numbExp=/^[0-9]{10}$/;
    let emailExp =/^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
    if(name===""){
      document.getElementById("nameNote").innerHTML="please enter name";


} 
else{
  if (name.match(alpExp)){
    document.getElementById('nameNote').innerHTML='';
  }
  else{
    document.getElementById('nameNote').innerHTML='enter valid name';
  }
} 
if (phone === "") {
  document.getElementById('phoneNote').innerHTML='Please Enter Email';
  } else {
    if (phone.match(numbExp)){
      document.getElementById('phoneNote').innerHTML='';
    }
    else{
      document.getElementById('phoneNote').innerHTML= "Enter Valid Phone Number";
      }
    }
if (email === "") {
  document.getElementById('emailNote').innerHTML='Please Enter Email';
  } else {
    if (email.match(emailExp)) {
      document.getElementById('emailNote').innerHTML="";
      
    }
    else{
      document.getElementById('emailNote').innerHTML ="Enter a valid email address";
    }
    }
    

 }
  render() {
    const{name,phone, email,subject,message}=this.state
   
    return (
      <div className='Contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
      form
      <form onSubmit={this.submitHandler}>
        <div className='row'>
          <div className='col-6'>
            <input type='text' name='fname' className='form-control'placeholder='name'value={name}
            onChange={this.changeHandler}
            />
            <span id ="nameNote" style={{color:'red'}}></span>
          </div>
          <div className='col-6'>
            <input type='text' name='phone' className='form-control' placeholder='phone'value={phone}
               onChange={this.changeHandler}/>
               <span id = "phoneNote"style={{color:"red"}} ></span>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-6'>
            <input type='text' name='email' className='form-control'placeholder='email' value={email}
               onChange={this.changeHandler}/>
               <span id= 'emailNote' style={{color: "red",}}></span>
          </div>
          <div className='col-6'>
            <input type='text' name='subject' className='form-control' placeholder='subject' value={subject}
               onChange={this.changeHandler}/>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-12'>
            <textarea className='form-control'value={message}   onChange={this.changeHandler}>send message</textarea>
          </div>
          
        </div>
        <div className='row mt-5'>
          <div className='col-md-12'>
            <input type="submit"  className='btn btn-danger' value='send message'/>
          </div>
          
        </div>
      </form>
            </div>
            <div className='col-4'>
              <h4>Address</h4>
              <p>ent institute</p>
              <p>madhapur</p>
              <p>opp hitech city</p>
              <p>
                pin-5300023
              </p>
            </div>
          </div>
        </div>
        <div className='container-fluid p-0 mt-5'>
          <div className='row'>
            <div className='col-md-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.46804319512!2d78.39558739999998!3d17.434364799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9143187d3597%3A0xb1f33ff6a1f98494!2sIn-Sync%20Centre%20for%20Child%20Development!5e0!3m2!1sen!2sin!4v1695360378869!5m2!1sen!2sin"></iframe>
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}
