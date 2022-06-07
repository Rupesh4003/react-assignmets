import React from 'react'
import Products from './Products'
import { useContext } from 'react'
import { BackContext } from '../context/BackContex'
import styles from "./Body.module.css"
const Body = () => {
  const {back,setBack}= useContext(BackContext)
  return (
    <div className={back ? styles.dark:styles.white}>Body
      <button onClick={()=>{
        setBack(!back)
      }}>{back ?"Dark Mode":"white Mode"}</button>
        <Products/>
    </div>
  )
}

export default Body