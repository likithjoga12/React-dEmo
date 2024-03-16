import React, { Component } from 'react'
import axios from 'axios';

export default class Markdetect extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           students :[],
           id:"",
           name:"",
           address:"",
        };
      }
      componentDidMount(){
          axios.get("http://localhost:4001/students")
          .then((res)=>{this.setState({
              students:res.data,
          });
          })
          .catch((err)=>{
              console.error("not found");
          });
          
      }
      changeHandler=(e)=>{
        this.
        setState
        ({
            [e.target.name]: e.target.value,
        });
      }
      deleteData=(sid)=>{
        axios
        .delete(`http://localhost:4001/students/${sid}`)
        .then((res)=>{
          alert ("data deleted successfull");
    
        })
        .catch((err)=>{
        alert("unable to delete data")
        });
      };
      editData=(sid)=>{
        axios.get(`http://localhost:4001/students/${sid}`)
        .then (res=>
        { this.setState({
            id: res.data.id ,
            name:res.data.name,
            address:res.data.address,
            

        });
    
        })
        .catch(err=>{
          alert ('no record');
        })
    
      }
      submitHandler =(e)=>{
        const{id,name,address}=this.state;
        e.preventDefault();
        axios.put(`http://localhost:4001/students/${id}`,{id,name,address})
        .then (res=>
            { 
                alert("update successful")
            })
            .catch(err=>{
              alert ('no record');
            })

      }
      render() {
        const{id,name,address}=this.state;
        return (
          <div>
           <form onSubmit={this.submitHandler}>
            <input type='text' name='id' value={id}
            onChange={this.changeHandler}/>
            <input type='text' name='name' value={name}
             onChange={this.changeHandler}/>
            <input type='text' name='address' value={address}
             onChange={this.changeHandler}/>
            <input type='submit' name ='submit'/>
           </form>
            <table>
                <thead><tr  >
                    <th>id</th>
                    <th>name</th>
                  <th>address</th>
                  <th></th>
                  <th></th>
                    </tr></thead>
                    <tbody>
                        {
                           this.state. students.map((stu)=>{
                                return(
                                    <tr key={stu.id}>
                                    <td>{stu.id}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.address}</td>
                                   
                                    <td><button className="btn btn-danger" onClick={()=>this.deleteData(stu.id)}>delete</button></td>
                                    <td><button className="btn btn-primary" onClick={()=>this.editData(stu.id)}>edit</button></td>
                                    </tr>)
                                    })}
    
                            
                    </tbody>
            </table>
      </div>
    )
  }
}
