'use client'
import { addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
const Form = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [inputs, setIntputs] = useState({
        name: '',
        lastName: '',
    })
    const [response, setResponse] = useState()

    



    const onSubmit = async (values) => {
        console.log(values);

        const data = await fetch('/api/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
               

            },
            body: JSON.stringify(values),

        })
        const response = await data.json()
        setResponse(response)

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='border border-red-500 flex flex-col'>
            <label htmlFor="email">Email</label>
            <input className='p-2 bg-gray-300 rounded-md'
                id='email'
                type="email"
                {...register("email", {
                    required: "Required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                })}
            />
            {errors.email && errors.email.message}
            <label htmlFor="username">Username</label>    
            <input className='p-2 bg-gray-300 rounded-md'
                {...register("username", {
                    validate: value => value !== "admin" || "Nice try!"
                })}
            />
            {errors.username && errors.username.message}
                {response && response.message}
            <button type="submit">Submit</button>
        </form>

    )
}

export default Form