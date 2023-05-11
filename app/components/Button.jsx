'use client'

import { useState } from "react"


const Button = ({url}) => {
  const [response, setResponse] = useState()

  const handleClick = async () => {
    const data = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + 1,

      },
    })
    const response = await data.json()
    setResponse(response)
  }


  return (
    <div>
      <button onClick={handleClick} className="py-2 px-2 bg-green-200 rounded-md">Hacer Peticion Get</button>

      <h1> {response && response}</h1>
    </div>
  )
}

export default Button