import React,{useState} from 'react'
import { useReducer } from 'react';
const initialstate=1;
const reducer1 =(state,action)=>{
    switch (action) {
        case "add":
            return state+1;
        case "sub":
            return state-1;
            default:
                return state;
    }

}
export const ReducerHook = () => {
    const  [count,dispatch] = useReducer(reducer1,initialstate);

  return (
    <div>
        <h1>Count : {count}</h1><br></br>
        <button onClick={()=> dispatch("add")}>+</button><br></br>
        <button onClick={()=> dispatch("sub")}>-</button>
    </div>
  )
}
