import React ,{useState} from 'react'
import './main.css'
import axios from 'axios';

export const Funorm = () => {
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[addres,setAddress]=useState("");
    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4001/students",{id,name,addres})
        .then(res=>{
            alert("data enterd")
            setId("");
            setName("");
            setAddress("");

        })
        .catch(err=>{
            alert("dta unable ")
        })
    }
  return (
    <div className='studentform '>
        <form onSubmit={submitHandler} >
        <div>
        <input type='text' name='id' placeholder='enter id'   value={id}
        onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div>
        <input type='text' name='name' placeholder='enter name'
         value={name}  onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
        <input type='text' name='address' placeholder='enter addreess'
        value={addres}  onChange={(e)=>setAddress(e.target.value)} />
        </div>
        <div>
        <input type='submit' name='submit' ></input>
        </div>
        
        </form>
    </div>
  )
}
