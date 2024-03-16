import axios from 'axios';
import React, {useState,useEffect}from 'react'
import { NavLink } from 'react-router-dom';

export const SudentData = () => {
    const [student,setStudent]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4001/students')
        .then(
            response=>{
                setStudent
                (response.data);
            })
            .catch((err)=>{console.log( err)});
    },);
    const deleteData =(sid)=>{
        axios
        .delete(`http://localhost:4001/students/${sid}`)
        .then((res)=>{
            alert ("data deleted successfull");
      
          })
          .catch((err)=>{
          alert("unable to delete data")
          });

    }
  return (
    <div> <table>
    <thead><tr  >
        <th>id</th>
        <th>name</th>
      <th>address</th>
      <th></th>
      
        </tr></thead>
        <tbody>
            {
                student.map((stu)=>{
                    return(
                        <tr key={stu.id}>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        <td>{stu.address}</td>
                        <td>
                            <button className='btn btn-primary'onClick={()=>deleteData(stu.id)}>
                            <i className="fa-solid fa-trash"></i>
                                </button>

                        </td>
                        <td>
                                    <NavLink to={`/editData/${stu.id}`}>
                                    <button className='btn btn-success'><i className="fa-regular fa-pen-to-square"></i></button>
                                </NavLink>
                                </td>
                       
                        </tr>)
                        })}

                
        </tbody>
</table></div>
  )
}
