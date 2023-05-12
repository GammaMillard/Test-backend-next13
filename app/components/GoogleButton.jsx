'use client'

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { provider, auth } from "../firebase/firebaseDb"



const GoogleButton = () => {
    
    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const credential = GoogleAuthProvider.credentialFromResult(res)
                const token = credential.accessToken
                const user = res.user
                console.log(user);
                console.log(token);
                console.log(credential);
            })
            .catch(err => {
                const errorCode = err.code
                const errorMessage = err.message
                const email = err.customData.email
                const credential = GoogleAuthProvider.credentialFromError(err)
                console.log(errorCode, errorMessage, email, credential);
            })
    }


    return (
        <div>
            <button onClick={handleClick} className="bg-green-200 p-3 rounded-md">
                Google
            </button>
        </div>
    )
}

export default GoogleButton