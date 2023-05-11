'use client'
import React, { createContext, useState } from 'react'

export const testContext = createContext()

const Context = ({children}) => {

    const [values, setValues] = useState({
        name: 'Millard',
        lastName: 'Dos Santos',
        age : 25
    })

    return (

        <testContext.Provider value={{values , setValues}}>
            {children}
        </testContext.Provider>
    )
}

export default Context