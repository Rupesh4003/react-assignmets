import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const Cart = () => {
  const{count,handle}=useContext(CartContext)
  return (
    <div>Cart
        <button onClick={()=>handle(1)}>Add to Cart</button>
    </div>
  )
}

export default Cart