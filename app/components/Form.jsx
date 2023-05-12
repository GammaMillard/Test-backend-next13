'use client'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { provider } from '../firebase/firebaseDb'

const auth = getAuth()

const Form = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
   
    const [response, setResponse] = useState()

    const onSubmit = async (values) => {
        signInWithPopup(auth, provider)
            .then( res => {
                const credential = GoogleAuthProvider.credentialFromResult(res)
                const token = credential.accessToken
                const user = res.user
                console.log(credential, token, user);
            })
            .catch( err => {
                const errorCode = err.code
                const errorMessage = err.message
                const email = err.customData.email
                const credential = GoogleAuthProvider.credentialFromError(err)
                console.log(errorCode, errorMessage, email, credential);
            })

       

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