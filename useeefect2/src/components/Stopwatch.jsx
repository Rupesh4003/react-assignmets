import React from 'react'

const Stopwatch = () => {
    const[time,setTime]=React.useState(0)
    //const[timerId,setTimerId]=React.useState()
    const timerId= React.useRef(null)

    const start=()=>{
      if(!timerId.current)
        {
            let id= setInterval(()=>{
                setTime((prev)=>prev+1) 
             },1000)
            // setTimerId(id)
            timerId.current=id
        }
  
    };
    const stop=()=>{
        //setTimerId(null)
       
        clearInterval(timerId.current)
        timerId.current=null
      
    };
    const reset=()=>{
        clearInterval(timerId.current);
        setTime(0)
        timerId.current=null
      
    }
  return (
    <div className='App'>
      <h1>Stopwatch</h1>
      <h2>{time}</h2>
      <div>
          <button onClick={start}>start</button>
          <button onClick={stop}>stop</button>
          <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
``