import React, { Component } from 'react'
import axios from 'axios';

export default class BasicStudentr extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         students :[],
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
  render() {
    return (
      <div>
        <table>
            <thead><tr  >
                <th>id</th>
                <th>name</th>
              <th>address</th>
                </tr></thead>
                <tbody>
                    {
                        this.state.students.map((stu)=>{
                            return(
                                <tr key={stu.id}>
                                <td>{stu.id}</td>
                                <td>{stu.name}</td>
                                <td>{stu.address}</td>
                                </tr>)
                                })}

                        
                </tbody>
        </table>
      </div>
    )
  }
}
