'use client'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebaseDb'
import { onAuthStateChanged } from 'firebase/auth'

export const testContext = createContext()

const Context = ({children}) => {

    const [user, setUser] = useState()

    const getCurrentUser = async() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log(user);
            }else{
                console.log('usuario desconectado');
            }
        })
    }


    useEffect(() => {
        getCurrentUser()
    },[])


    return (

        <testContext.Provider value={{user , setUser}}>
            {children}
        </testContext.Provider>
    )
}

export default Context