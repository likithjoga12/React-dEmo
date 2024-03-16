import React,{useEffect,useState} from 'react'

const CustommHook = (url) => {
    const[data,setData] = useState([]);
    useEffect (()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> setData(data))
        .catch((error)=>{console.log("Error", error)});
        

    });
  return  data;
  
}

export default CustommHook