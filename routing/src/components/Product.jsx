import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams();
  const [prod, setProd] = React.useState({})
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/todos/${id}`)
        .then((res) => res.json())
        .then((d) => setProd(d))
    }
  }, [id])
  return (
    <div>
      <h1> prod:{id}

      </h1>
      <h1>{prod.value}</h1>
    </div>
  )
}

export default Product