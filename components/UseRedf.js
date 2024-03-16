import React,{useRef} from 'react'

const UseRedf = () => {
    const counterRef = useRef();

    const  counterUpdate  = () => {
        counterRef.current.value++;
        counterRef.current.focus();
    }
   

  return (
    <div className="m-5">UseRedf
        <input type="text" name="counter" ref={counterRef}/>
        <button onClick={counterUpdate} >+</button>
    </div>
  )
}

export default UseRedf