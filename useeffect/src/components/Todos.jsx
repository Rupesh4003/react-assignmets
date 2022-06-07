import React from 'react'

const Todos = () => {
    const [todos, setTodos] = React.useState([]);
    const [newTodo, setNewTodo] = React.useState("");
    const [isEdit, setIsEdit] = React.useState(true);
    const[edit,setEdit]=React.useState("")
    const addInfo = () => {
        fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({

                "value": newTodo,
                "isCompleted": true
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos([...todos, data])
                setNewTodo("")
            })
        //setTodos([...todos,data])
        //setNewTodo("")

    }

    const deleteInfo = (id) => {
        fetch(`http://localhost:8080/todos/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data)
            })
        let newInfo = todos.filter((item) => {
            return (
                item.id != id
            )
        })
        setTodos(newInfo)
    }
    const editInfo = (id) => {
        fetch(`http://localhost:8080/todos/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
            "value": `${edit}`,
            "isCompleted": true
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            setTodos(...todos,data)
        })
        setIsEdit(!isEdit)
}
const saveIt=()=>{
    setTodos([...todos,{id:todos.length+1,
    "value":edit,
"isCompleted":true}])
setEdit("")

}


React.useEffect(() => {
    fetch("http://localhost:8080/todos")
        .then((res) => res.json())
        .then((data) => {

            setTodos(data);
        })
}, [])
return (
    <div>Todos
        <div>
            <input value={newTodo} onChange={({ target }) => setNewTodo(target.value)} />
            <button onClick={addInfo}>Add</button>
        </div>
        {todos.map((item) => {
            return (
                <div key={item.id}>
                    <h1 >{item.value}</h1>
                    <button onClick={() => deleteInfo(item.id)}>delete</button>
                    <button onClick={() => editInfo(item.id)}>Edit</button>
                    {isEdit && <div><input value={edit} onChange={(e)=>setEdit(e.target.value)} />
                    <button onClick={saveIt}>save</button></div>}
                </div>
            )
        })}
    </div>
)
}

export default Todos