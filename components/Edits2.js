import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {  useNavigate, useParams } from 'react-router-dom';


const Edits2 = () => {
  const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[addres,setAddress]=useState("");
  const {sno}= useParams();
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get (`http://localhost:4001/students/+${sno}`)
    .then((res) =>{
      setId(res.data.id);
            setName(res.data.name);
            setAddress(res.data.addres);

    })

    .catch
    ((err)=>{
      console.log(err);
    })
    
  },[])
  const submitHandler=()=>{
    
    axios.post(`http://localhost:4001/students/${id}`,{id,name,addres})
    .then(res=>{
        alert("data enterd")
        navigate("/")
       
    })
    .catch(err=>{
        alert("dta unable ")
    })

  }
  return (
    <div className='studentform'>
      <form 
      onSubmit={
        submitHandler
      }>
      <div>
      <input type='text' name='id' placeholder='enter id'value={id}
      onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div>
      <input type='text' name='name' placeholder='enter name' value={name} 
      onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
        <input type='text' name='address' placeholder='enter addreess' value={addres}
        onChange={(e)=>setAddress(e.target.value)}  />
        </div>
        <div>
        <input type='submit' name='submit' ></input>
        </div>
      </form>
    </div>
  )
}
export default Edits2;
