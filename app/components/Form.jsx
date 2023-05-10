'use client'
import React, { useState } from 'react'
const Form = () => {

    const [inputs, setIntputs] = useState({
        name: '',
        lastName: '',
    })
    const [response, setResponse] = useState()

    const handleOnChange = (e) => {
        setIntputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = await fetch('/api/users', {
            method : 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(inputs),

        })

        setResponse(data)

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre :</label>
                <input onChange={handleOnChange} type="text" name="name" id="name" value={inputs.name} />
                <label htmlFor="lastName">Last Name : </label>
                <input onChange={handleOnChange} type="text" name="lastName" id="lastName" value={inputs.lastName} />
                <input type="submit" value={'Enviar info'} className="cursor-pointer border border-red-500" />
            </form>


            {
                response && <div>
                    <p>Respuesta :</p>
                    <p>{response}</p>∫
                </div>
            }
        </div>

    )
}

export default Form