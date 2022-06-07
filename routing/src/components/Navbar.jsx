import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate= useNavigate()

  const handleClick=(id)=>{
    if(id==1)
    {
      navigate("/products/1")
    }
    else if(id==5)
    {
      navigate("/products/5")
    }
   
  }
  const handleClickk=()=>{
    navigate("/")
  }
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <button onClick={handleClickk}>to home </button>
        <button onClick={()=>handleClick(5)}>to 5</button>
      
    </div>
  )
}

export default Navbar
