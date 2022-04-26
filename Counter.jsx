import React, { useState } from 'react'

export default function() {


    const [count , setCount]= useState(1);
    const handleClick=()=>{
        setCount(count*2);
    }
    const handleInc=()=>{
        setCount(count+1)
    }
    const handleDec=()=>{
        setCount(count-1)
    }
  return (
    <div>

    <h1>counter</h1>
    <h1>{count}</h1>
    <button onClick={handleInc}>increment</button>
    <button onClick={handleDec}>decrement</button>

    <button onClick={handleClick}>double</button>

    



    </div>
  )
}
