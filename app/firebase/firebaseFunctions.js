import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebaseDb";

const setDocFirebase = async (data) => {
    const message = { message: 'Registro hecho correctamente' }

    const dataDot = await getDoc(doc(db, 'users', data.username))
    const response = dataDot.data()

    if (dataDot.exists()) {
        message.message = 'Usuario ya registrado'
    } else {
        await setDoc(doc(db, 'users', data.username), data)

    }

    return message

}

const getDocsFirebase = async(collec) => {
    
    const data = await getDocs(collection(db, collec))
    const results = []
    
    data.forEach(doc => {
        results.push(doc.data())
    })
    return results
}


export {
    setDocFirebase,
    getDocsFirebase
}

