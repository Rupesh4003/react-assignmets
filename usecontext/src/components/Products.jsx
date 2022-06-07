import React from 'react'
import Product from './Product'
import { useContext } from 'react'
import { AuthContex } from '../context/AuthContext'

const Products = () => {
  const{auth}=useContext(AuthContex)
  return (
    <div>Products
        <Product/>
        <h1>status:{auth ? "logged in":"logged out"}</h1>
    </div>
  )
}

export default Products