import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseDb";

const firebaseSetDoc = async (data) => {
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

export {
    firebaseSetDoc
}

