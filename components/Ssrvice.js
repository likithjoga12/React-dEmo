import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Ssrvice = () => {
    const [studenat,setStudents]= useState("");
    const {id}=useParams();
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
        setStudents(res.data)
        
    })
    .catch((err)=>console.log(err ))

  return (
    <div>
        <h1>Service Page</h1>
        {id}
        <table>
            <tr>
                <td>
                    ID
                </td>
                <td>{studenat.id}</td></tr>
                <tr>
                <td>
                    Title
                </td>
                <td>{studenat.title}</td>
                </tr>
                <tr>
                <td>
                    Body
                </td>
                <td>
                {studenat.body}
                </td>

            </tr>
        </table>

    </div>
  )
}

export default Ssrvice