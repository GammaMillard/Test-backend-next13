'use client'

import { doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase/firebaseDb"
import { getDocsFirebase } from "../firebase/firebaseFunctions"




const Button = ({ url }) => {
  const [response, setResponse] = useState()

  const handleClick = async () => {

    
    const test = await getDocsFirebase('users')
    const data = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + 1,
      },
    })
    const response = await data.json()

    console.log(response);
    setResponse(test)
  }


  return (
    <div>
      <button onClick={handleClick} className="py-2 px-2 bg-green-200 rounded-md">Hacer Peticion Get</button>

      {
        response && response.map( (e,i) => <h1 key={i}>{e.name}</h1>)
      }
    </div>
  )
}

export default Button