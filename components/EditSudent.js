import axios from 'axios';
import './main.css'
import React,{useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditSudent = () => {
  const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[address,setAddress]=useState("");
  const {sno}= useParams();
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get (`http://localhost:4001/students/${sno}`)
    .then((res) =>{
      setId(res.data.id);
            setName(res.data.name);
            setAddress(res.data.address);

    })

    .catch
    ((err)=>{
      console.log(err);
    })
    
  },[])
  const submitHandler=(e)=>{
    e.preventDefault();
    
    axios.put(`http://localhost:4001/students/${id}`,{id,name,address})
    .then(res=>{
        alert("data updated");
        navigate("/");
       
    })
    .catch(err=>{
        alert("dta unable update ");
    })

  }
 
  return (
    <div className='studentform'>
      <form 
      onSubmit={submitHandler}>
      <div>
      <input type='text' name='id' placeholder='enter id'value={id}
      onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div>
      <input type='text' name='name' placeholder='enter name' value={name} 
      onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
        <input type='text' name='address' placeholder='enter addreess' value={address}
        onChange={(e)=>setAddress(e.target.value)}  />
        </div>
        <div>
        <input type='submit'  ></input>
        </div>
      </form>
    </div>
  )
}
export default EditSudent