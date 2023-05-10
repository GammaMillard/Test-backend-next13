'use client'

import { useState } from "react"

const Button = () => {

 

    const handleClick = async () => {
       const data = await fetch('/api/hello', {
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({message : 'hola'}),
            
          })
        

     }
   
  return (
    <><button onClick={handleClick} className='text-black p-2 bg-white'>Make Fetch</button>
    <div>{data}</div>
    </>
  )
}

export default Button