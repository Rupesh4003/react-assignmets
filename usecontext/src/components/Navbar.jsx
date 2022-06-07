import React, { useContext } from 'react'
import { AuthContex } from '../context/AuthContext'
import Wishlist from './Wishlist'

const Navbar = () => {
  const {auth,login,logout} = useContext(AuthContex)
  return (
    <div>Navbar
       
        <button onClick={()=>
        {
        if(auth) logout()
        else {login("R","S")}

        }}>{auth ? "Logout":"Login" }</button>
         { auth && <Wishlist/>}
    </div>
  )
}

export default Navbar