import React,{useEffect,useState} from 'react'
import axios from 'axios'


export const Arcmpnt = () => {
    const [counter,setCounter]  = useState(0);
    useEffect(()=>{
        document.title =`you clicked ${counter}times`;
    });

  return (
    <div>
        <h1>counter:{counter}</h1>
        <button onClick={()=> setCounter(counter+1)}>click me</button>
      
    </div>
  )
}
