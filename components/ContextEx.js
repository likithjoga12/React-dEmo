import { useState,createContext } from "react"
import React  from 'react'
 const UserData = createContext();

const ContextEx = () => {

    const [count, setCount] = useState('Elearb')
  return (
    <div>ContextEx
        <UserData.Provider value={{ count , setCount}} >
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <Component2/>
        </UserData.Provider>
        
    </div>
  )
}

export default ContextEx
function Component2(){
    const{count,setCount}=React.useContext(UserData)
   return (<div>
    <h3>Child component:</h3>
     <p>{count}</p>
     <button onClick={()=>setCount(count-1)}>Decrease</button>

   </div>)
}
// class Component2 extends React.Component{
    //     render(){
        //       console.log("rendering")
        //     const{count,setCount}=
        
