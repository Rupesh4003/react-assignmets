import React from 'react'

const TodoItem = (props) => {
    const[isCompleted,setIsCompleted]=React.useState(false)
    //console.log(props)
   
  return (
    <div>
      <h1 style={{textDecoration:isCompleted ? "line-through":"none"}}>{props.value}</h1>
      <input type="checkbox" onClick={()=>setIsCompleted(!isCompleted)}/>
      
      <button onClick={()=>props.handleDelete(props.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
