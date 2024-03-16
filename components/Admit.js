import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"
import { useNavigate } from 'react-router-dom';

 const Admit = () => {
    const [name,setName]=useState("");
    const [pwd,setPwd]=useState("");
    const navigate= useNavigate();
    const submitHandlee=(e)=>{
        e.preventDefault();
        if(name ==="Admin"&& pwd ==="123456"){
            navigate("/dashboard");
        }
        else{
            alert("invalid user")
        }
    }
  return (
    <div className='basic'>
    <div className='container bg-primary pt-5 pb-5'>
        <div className='row'>
            <div className='col-2'>

            </div>
            <div className='col-6'>
                <form onSubmit={submitHandlee}>
                    <div>
                        <input type='text' name='name' placeholder='admin' className='form-control'value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <input type='password' name='pwd' placeholder='enter password' className='form-control' value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                    </div>
                    <div>
                        <input type='submit' name='submit'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Admit;
