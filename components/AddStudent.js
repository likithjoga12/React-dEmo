import React, {useState} from 'react'
import './main.css'
import axios from 'axios';
export const AddStudent = () => {
    const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[address,setAddress]=useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4001/students',{id,name,address})
    .then(res=>{
        alert("data enterd");
        setId("");
        setName("")
        setAddress("")
    })
    .catch(err=>{
        alert("dta unable ");
    })

  }

  return (
    <div><div className='studentform  '>
    <form onSubmit={submitHandler}>
    <div>
    <input type='text' 
    name='id' 
    placeholder='Id'
    value={id}
    onChange={(e)=>setId(e.target.value)}
    
    
    />
    </div>
    <div>
    <input type='text' name='name' placeholder='enter name'  value={name}  onChange={(e)=>setName(e.target.value)} />
    </div>
    <div>
    <input type='text' name='address' placeholder='enter addreess' value={address} onChange={(e)=>setAddress(e.target.value)} />
    </div>
    <div>
    <input type='submit' name='submit' ></input>
    </div>
    
    </form>
    </div></div>
  )
}
