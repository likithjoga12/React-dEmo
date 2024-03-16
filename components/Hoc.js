import React ,{Component}from 'react'
import Admit from './Admit'

const Hoc = (Comp) => {
  return class NewCompponent extends Component{
            constructor(props) {
                super(props)
              
                this.state = {
                   login:true,
                }
              }
            render(){
              
                return(
                  (this.state.login)? <Comp {...this.props} name="Elearn"/> : <Admit/>
                )
            }
        }
 
  
}

export default Hoc