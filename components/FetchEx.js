import React from 'react'
import CustommHook from './CustommHook';



export const FetchEx = () => {
    const posts=CustommHook("https://jsonplaceholder.typicode.com/posts");

    const todos=CustommHook("https://jsonplaceholder.typicode.com/todos");
   

  return (
    <div className="container">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>


                </tr>
            </thead>
            <tbody>
                
                {
                 posts.map((data)=>{
                    return(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                        </tr>
                    )

                 })

}

            </tbody>


        </table>
     <h1>hloo todos</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>


                </tr>
            </thead>
            <tbody>
                
                {
                 todos.map((data)=>{
                    return(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                        </tr>
                    )

                 })

}

            </tbody>
            

        </table>
        </div>
   
  )
}
