import axios from 'axios';
import React ,{useState}from 'react'
import { useParams } from 'react-router-dom';

export const Somn = () => {
    const {id}=useParams();
    const [data1,setData1]=useState("")
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        setData1(res.data);
    })
    .catch(err=>console.error(err))
    
    
   // alert(id);

  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        {data1.id}
                    </td>
                </tr>
                <tr>
                    <td>
                        Title
                    </td>
                    <td>
                        {data1.title}
                    </td>
                </tr>
                <tr>
                    <td>
                        Body
                    </td>
                    <td>
                        {data1.body}..
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
