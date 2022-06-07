import React from 'react'

const Timer = () => {
  const[timer,setTimer]= React.useState(30)

  React.useEffect(()=>{
   const id= setInterval(()=>{

      setTimer((timer)=>timer-1)
    },1000)
    return()=>{

      clearInterval(id)
    }

  },[])
  return (
    <div className='App'>Timer
    <h1>{timer}</h1>
    
    
    </div>
  )
}

export default Timer