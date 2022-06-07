import React from 'react'
import { useParams } from 'react-router-dom'

const CheckHere = () => {
    const{id} =useParams()
  return (
    <div>CheckHere
        <h1>product:{id}</h1>
    </div>
  )
}

export default CheckHere