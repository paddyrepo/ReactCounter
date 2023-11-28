import React from 'react'
import { useState } from 'react';
import '../App.css';
const Counter = () => {
    /* useState */
    const[count,setCount] = useState(0); // count initialized with default value 0
    const[error,setError] = useState(""); 

    const incr = () => {
        setError("")
        setCount(count+1);
    }

    const decrease = () => {
        if(count <= 0){
            setError("count below zero")
        }else{
        setCount(count-1);
        }
    }

    const reset = () => {
        setError("")
        setCount(0);
    }
  return (
    <div className='counter'>
        <p> Functional</p>
      <p> Count : {count}</p>
      <p className='error'>{error}</p>
      <button onClick={incr}>Increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
