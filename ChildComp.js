import React from 'react'

 const ChildComp = (props) => {
  return (
    <div> <button onClick={props.alert}>Click me</button>
    </div>
  )
}
export default ChildComp;