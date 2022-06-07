import React from 'react'
import axios from "axios"

function Todos() {
    const [todo, setTodo] = React.useState([])
    const [page, setPage] = React.useState(1)
    const[pageTotal,setPageTotal]=React.useState(0)
    const[limit,setLimit]=React.useState(3)
    React.useEffect(() => {
      const getTodo = async () => {
        let res = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
       // console.log(res)
        setPageTotal(Number(res.headers["x-total-count"]))
        setTodo(res.data)
      }
      getTodo()
    }, [page,limit])
    return (
      <div className="App">
        {todo.map((item) => {
          return (
            <div key={item.id}>{item.value}</div>
          )
        })}
        <button disabled={pageTotal<page*limit} onClick={() => setPage(page + 1)}>+</button>
        <button>
          <select onChange={(e)=> {console.log(e)
            setLimit(Number(e.target.value))}}>
           
            <option value="4">4</option>
            <option value="2">2</option>
          </select>
        </button>
        <button disabled={page == 1} onClick={() => {
          if (page > 1) { 
            setPage(page-1)
          }
        }}>prev</button>
      </div>
    );
  }
  
 
export default Todos
