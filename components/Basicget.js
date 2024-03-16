import React, { Component } from 'react'
import axios from 'axios';

export default class Basicget extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
      };
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.setState({
                posts:res.data,
            });
        })
        .catch((err)=>{
            console.error(err);
        });
    }
  render() {
    return (
      <div>
        <table>
            <thead><tr style={{backgroundColor:'#0275d8',color:"white"}} >
                <th>id</th>
                <th scope="col">Title</th>
              
                </tr></thead>
                <tbody>
                    {
                        this.state.posts.map((item)=>{
                            return(
                                <tr key={item.Id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                </tr>)
                                })}

                        
                </tbody>
        </table>
        hekllo

      </div>
    )
  }
}
