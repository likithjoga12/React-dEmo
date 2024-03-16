import React,{useState, useEffect} from 'react'
import "datatables.net-dt/css/dataTables.dataTables.min.css"
import "datatables.net-dt/js/dataTables.dataTables";
import "jquery/dist/jquery.slim"
//import $ from 'jquery';
import { NavLink } from 'react-router-dom';


export const Fetcha = () => {
    const [posts, setPosts] = useState([]);
    //para guardar los datos que v
   //la URL
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts") 
        .then((response)=> response.json())
        .then((data)=>setPosts( data))
       
        .catch
        ((err)=>{
            console.log(err)
        })
       
       
    })


  return (
    <div className="container">
        <table >
            
            <tbody>
                
                {
                 posts.map((data)=>{
                    return(
                        <tr>
                            
                            <td><NavLink to={`/deleteservf/${data.id} `}>{data.title}</NavLink>
                                </td>
                        </tr>
                    )

                 })

}

            </tbody>


        </table>
     
        </div>
   
  )
}
