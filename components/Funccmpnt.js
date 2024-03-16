import React,{useState} from 'react'

export const Funccmpnt = () => {
    const [name,setName]=useState("elaearn");
  return (
    <div>
        <h1>{name}</h1><br/>
        <button onClick={()=> setName('monsoon')}>change name</button>
       

    </div>
  )
}
