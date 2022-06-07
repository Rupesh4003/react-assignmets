// import React from 'react'
// const reducer=(state,action)=>{
//     switch(action.type)
//     {
//         case"INC":{return state+1}
//         case"DEC":{return state-1}
//         default:{
//             return state;
//         }
//     }

// }

// const Counter = () => {
//     const [counter,dispatch]=React.useReducer(reducer,0)
//   return (
//     <div className='App'>
//       <h1>count:{counter}</h1>
//       <button onClick={()=>dispatch({type:"DEC"})}>-</button>
//       <button onClick={()=>dispatch({type:"INC"})}>+</button>
//     </div>
//   )
// }

// export default Counter




import React from 'react'

const reducer= (state,{type,value})=>{

  switch(type)
  {
    case "INC":{ return state+value}
    case "DEC":{return state-1}
    default:{return state}
  }
}

const Counter = () => {
  const[counter,dispatch]= React.useReducer(reducer,20)
  return (
    <div className='App'>
      <h1>COUNT:{counter}</h1>
      <button onClick={()=>dispatch({type:"INC",value:2})} >+</button>
      <button onClick={()=>dispatch({type:"DEC"})} >-</button>
    </div>
  )
}

export default Counter
