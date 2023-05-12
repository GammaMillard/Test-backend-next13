'use client'

import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebaseDb"

const SignOut = () => {

    const handleClick = () => {
        signOut(auth).catch(err => console.log(err))
    }
    
    return (
        <div>
            <button onClick={handleClick} className="bg-red-200 p-3 rounded-md" >Sign Out</button>

        </div>)
}

export default SignOut