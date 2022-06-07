import React from 'react'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  const [data, setData] = React.useState([])
  useEffect(() => {

    const getData = async () => {
      let res = await fetch("http://localhost:8080/todos")
      let d = await res.json();
      setData(d)


    }


    getData()
  }, [])

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
         <Link to={`/products/${item.id}`}>{item.value}</Link>
      
          </div>
        )
      
      })}
        <div>
             <Outlet/>
        </div>
    </div>
  )
}

export default Products