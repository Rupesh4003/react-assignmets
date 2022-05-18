import React from "react";
import TodoItem from "./TodoItem";


const Todo=()=>{
    const[newTodo,setNewTodo]=React.useState("");
    const[todo,setTodo]=React.useState([]);
  
    const handleAdd=()=>{
        setTodo([...todo,{
            value:newTodo,
            id:todo.length+1,
           
        }])
    }
    const handleDelete=(id)=>{
        let latestTodo=todo.filter((item)=>{return(item.id!=id)})
        console.log(latestTodo)
        setTodo(latestTodo)
    }

return(

    <div>
        <input onChange={(e)=>setNewTodo(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
     {todo.map((item)=>{
         return(
            <TodoItem key={item.id} {...item}  handleDelete={handleDelete}/>
         )
      
     })}
    </div>
)

}
export default Todo;