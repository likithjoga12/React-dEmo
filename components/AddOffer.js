import React, {useState} from 'react'
import './main.css'
import axios from 'axios';
 const AddOffer = () => {
  const[id,setId]=useState("");
  const[lnews,setLnews]=useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4001/lnews',{id,lnews})
    .then(res=>{
        alert("data enterd");
        setId("");
        setLnews("")
   
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
    <input type='text' name='lnews' placeholder='enter lnews'  value={lnews}  onChange={(e)=>setLnews(e.target.value)} />
    </div>
   
    <div>
    <input type='submit' name='add lnews' ></input>
    </div>
    
    </form>
    </div></div>
  )
}

export default AddOffer;